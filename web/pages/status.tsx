import { UnwrapPromise } from "../utils/unwrapPromise";
import { Status } from "../../api/src/actions/status";
import { Table } from "react-bootstrap";

type ApiResponse = UnwrapPromise<typeof Status.prototype.run>;

export default function StatusPage(props) {
  const { serverStatus }: { serverStatus: ApiResponse } = props;

  return (
    <>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Key</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Server Name</td>
            <td>{serverStatus.name}</td>
          </tr>
          <tr>
            <td>Server Description</td>
            <td>{serverStatus.description}</td>
          </tr>
          <tr>
            <td>ID</td>
            <td>{serverStatus.id}</td>
          </tr>
          <tr>
            <td>Actionhero Version</td>
            <td>{serverStatus.actionheroVersion}</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

StatusPage.getInitialProps = async () => {
  const response = await fetch(`${process.env.API_URL}/api/1/status`);
  const serverStatus = await response.json();
  return { serverStatus };
};
