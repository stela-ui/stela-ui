import { render } from '../../utils/test';
import { Table } from './Table';
import { TableCell } from './TableCell';
import { TableRow } from './TableRow';

describe('Table', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Table columns={2}>
        <TableRow>
          <TableCell>table-cell-1</TableCell>
          <TableCell>table-cell-1</TableCell>
        </TableRow>
      </Table>
    );
    expect(baseElement).toBeTruthy();
  });
});
