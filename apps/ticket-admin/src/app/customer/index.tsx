import { ticketListType } from '@dh-ticketing/shared-modal';
import {
  Table,
  TableBody,
  TableBodyCell,
  TableContainer,
  TableHead,
  TableHeadCell,
  TableRow,
} from '@dh-ticketing/shared/ui';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ApiService } from '../../api/nodeServer';
const TitleList = ['Name', 'Opens hours', ' status', 'Action'];
const TicketList = () => {
  const [deleteConfirmationModal, setDeleteConfirmationModal] = useState(false);
  const [ticketList, setTicketList] = useState<ticketListType[]>();

  const navigate = useNavigate();
  const fetchUserList = async () => {
    await ApiService.get('/admin/ticket?page=1&limit=10&orderBy=asc').then(
      (res) => setTicketList(res.data.data)
    );
  };
  const handleAddUser = () => {
    navigate('/admin/user/create');
  };

  const handleDelete = async (id: string) => {
    await ApiService.delete(`/admin/user/${id}`).then((res) => {
      fetchUserList();

      setDeleteConfirmationModal(false);
    });
  };

  useEffect(() => {
    fetchUserList();
  }, []);
  return (
    <div>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {TitleList.map((n: string, idx) => (
                <TableHeadCell key={idx}>{n}</TableHeadCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {ticketList?.map((ticket: ticketListType, idx) => (
              <TableRow>
                <TableBodyCell>{ticket.name}</TableBodyCell>
                <TableBodyCell>{ticket.city}</TableBodyCell>
                <TableBodyCell>{ticket.description}</TableBodyCell>
                <TableBodyCell>add</TableBodyCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TicketList;
