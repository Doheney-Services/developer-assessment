import React, { useState, useEffect } from 'react';

const Dashboard = () =>
{
    const [name, setName] = useState('');
    const userId = localStorage.getItem('userId');

    useEffect(() =>
    {
        const fetchFullName = async () =>
        {
            try
            {
                const response = await fetch(`http://localhost:3000/users/${userId}`, {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                });

                if (response.ok)
                {
                    const data = await response.json();
                    console.log(data);
                    setName(data.fullname);
                } else
                {
                    throw new Error('Failed to fetch name');
                }
            } catch (error)
            {
                console.error('Error fetching name:', error);
            }
        };

        if (userId)
        {
            fetchFullName();
        }
    }, [userId]);

    return <div>{name}</div>;
};

export default Dashboard;
