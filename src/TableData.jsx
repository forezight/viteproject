import React, { useState, useEffect } from "react";
import { DynamoDBClient, ScanCommand } from "@aws-sdk/client-dynamodb";
import dynamoClient from "./dynamoClient.tsx"; // Import the DynamoDB client

const TableData = () => {
  console.log("TableData component is rendering");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("TableData component is rendering");
    const fetchData = async () => {
      try {
        const params = {
          TableName: "Todo-wil2orircjgk3pynkymxycmn2u-project", // Replace with your DynamoDB table name
        };

        const command = new ScanCommand(params);
        const { Items } = await dynamoClient.send(command);

        // Convert items from DynamoDB format to normal JS objects
        const formattedData = Items.map((item) => ({
          id: item.id.S,
          alto: item.alto.S,
          ancho: item.ancho.S,
          createdAt: item.createdAt.S,
          dvh: item.dvh.S,
          espesor: item.espesor.S,
          presencia: item.presencia.S,
          rack: item.rack.S,
          slot: item.slot.S,
          tipo: item.tipo.S,
          updatedAt: item.updatedAt.S,
        }));

        setData(formattedData);
        setLoading(false);
      } catch (err) {
        setError("Failed to load data");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Table Data</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Alto</th>
            <th>Ancho</th>
            <th>Created At</th>
            <th>DVH</th>
            <th>Espesor</th>
            <th>Presencia</th>
            <th>Rack</th>
            <th>Slot</th>
            <th>Tipo</th>
            <th>Updated At</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.alto}</td>
              <td>{item.ancho}</td>
              <td>{item.createdAt}</td>
              <td>{item.dvh}</td>
              <td>{item.espesor}</td>
              <td>{item.presencia}</td>
              <td>{item.rack}</td>
              <td>{item.slot}</td>
              <td>{item.tipo}</td>
              <td>{item.updatedAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableData;
