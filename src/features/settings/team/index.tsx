import moment from 'moment';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { showNotification } from '../../../app/store/headerSlice';
import TitleCard from '../../../components/Cards/TitleCard';

const TopSideButtons: React.FC = () => {
  const dispatch = useDispatch();

  const addNewTeamMember = () => {
    dispatch(
      showNotification({ message: 'Add New Member clicked', status: 1 })
    );
  };

  return (
    <div className="inline-block float-right">
      <button
        className="btn px-6 btn-sm normal-case btn-primary"
        onClick={addNewTeamMember}
      >
        Invite New
      </button>
    </div>
  );
};

const TEAM_MEMBERS = [
  {
    name: 'Alex',
    avatar: 'https://reqres.in/img/faces/1-image.jpg',
    email: 'alex@react-redux-toolkit-template.com',
    role: 'Owner',
    joinedOn: moment(new Date())
      .add(-5 * 1, 'days')
      .format('DD MMM YYYY'),
    lastActive: '5 hr ago',
  },
  {
    name: 'Ereena',
    avatar: 'https://reqres.in/img/faces/2-image.jpg',
    email: 'ereena@react-redux-toolkit-template.com',
    role: 'Admin',
    joinedOn: moment(new Date())
      .add(-5 * 2, 'days')
      .format('DD MMM YYYY'),
    lastActive: '15 min ago',
  },
  {
    name: 'John',
    avatar: 'https://reqres.in/img/faces/3-image.jpg',
    email: 'jhon@react-redux-toolkit-template.com',
    role: 'Admin',
    joinedOn: moment(new Date())
      .add(-5 * 3, 'days')
      .format('DD MMM YYYY'),
    lastActive: '20 hr ago',
  },
  {
    name: 'Matrix',
    avatar: 'https://reqres.in/img/faces/4-image.jpg',
    email: 'matrix@react-redux-toolkit-template.com',
    role: 'Manager',
    joinedOn: moment(new Date())
      .add(-5 * 4, 'days')
      .format('DD MMM YYYY'),
    lastActive: '1 hr ago',
  },
  {
    name: 'Virat',
    avatar: 'https://reqres.in/img/faces/5-image.jpg',
    email: 'virat@react-redux-toolkit-template.com',
    role: 'Support',
    joinedOn: moment(new Date())
      .add(-5 * 5, 'days')
      .format('DD MMM YYYY'),
    lastActive: '40 min ago',
  },
  {
    name: 'Miya',
    avatar: 'https://reqres.in/img/faces/6-image.jpg',
    email: 'miya@react-redux-toolkit-template.com',
    role: 'Support',
    joinedOn: moment(new Date())
      .add(-5 * 7, 'days')
      .format('DD MMM YYYY'),
    lastActive: '5 hr ago',
  },
];

const Team: React.FC = () => {
  const [members] = useState(TEAM_MEMBERS);

  const getRoleComponent = (role: string) => {
    if (role === 'Admin')
      return <div className="badge badge-secondary">{role}</div>;
    if (role === 'Manager') return <div className="badge">{role}</div>;
    if (role === 'Owner')
      return <div className="badge badge-primary">{role}</div>;
    if (role === 'Support')
      return <div className="badge badge-accent">{role}</div>;
    return <div className="badge badge-ghost">{role}</div>;
  };

  return (
    <>
      <TitleCard
        title="Active Members"
        topMargin="mt-2"
        TopSideButtons={<TopSideButtons />}
      >
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email Id</th>
                <th>Joined On</th>
                <th>Role</th>
                <th>Last Active</th>
              </tr>
            </thead>
            <tbody>
              {members.map((member, index) => (
                <tr key={index}>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-circle w-12 h-12">
                          <img src={member.avatar} alt="Avatar" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{member.name}</div>
                      </div>
                    </div>
                  </td>
                  <td>{member.email}</td>
                  <td>{member.joinedOn}</td>
                  <td>{getRoleComponent(member.role)}</td>
                  <td>{member.lastActive}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </TitleCard>
    </>
  );
};

export default Team;
