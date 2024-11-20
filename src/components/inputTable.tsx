import styled from "styled-components";

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin: 0 auto;
  th {
    background-color: #f2f2f2;
    color: #333;
    font-weight: bold;
  }
  td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: center;
  }
`;

export const InputTable = () => {
  return (
    <Table>
      <tr>
        <th>食材</th>
        <th>数量</th>
      </tr>
      <tr>
        <input></input>
        <input></input>
      </tr>
    </Table>
  );
};
