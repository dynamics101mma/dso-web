import React from 'react';
import { useMainComponent } from '../context/mainComponent.context';
import { MainComponentContextType } from '../constants/page-constants';
import { useTable, Column } from 'react-table';

interface ClubData {
    day: string;
    '6:30AM To 8:00AM': string;
    '8:30AM To 10:00AM': string;
    '5:00AM To 6:30PM': string;
    '7:00AM To 8:30PM': string;
}

export function Schedules() {
    const mainComponent = useMainComponent();

    const data: ClubData[] = React.useMemo(
        () => [
            { 
                day: 'Monday',
                '6:30AM To 8:00AM': 'Boxing',
                '8:30AM To 10:00AM': 'Muay Thai / Boxing',
                '5:00AM To 6:30PM': 'Muay Thai / Boxing ',
                '7:00AM To 8:30PM': 'Boxing'
            },
            { 
                day: 'Tuesday',
                '6:30AM To 8:00AM': 'Submission/Grappling / Boxing',
                '8:30AM To 10:00AM': 'MMA / Grappling / Wresting',
                '5:00AM To 6:30PM': 'MMA / Grappling / Wrestling',
                '7:00AM To 8:30PM': 'Submission/Grappling / Boxing'
            },
            { 
                day: 'Wednesday',
                '6:30AM To 8:00AM': 'Kickboxing / Muay Thai , Touch Sparring Session',
                '8:30AM To 10:00AM': 'MMA / Wrestling ,  Touch Sparring Session',
                '5:00AM To 6:30PM': 'MMA / Wrestling , Touch Sparring Session',
                '7:00AM To 8:30PM': 'Kickboxing / Muay Thai , Touch Sparring Session'
            },
            { 
                day: 'Thursday',
                '6:30AM To 8:00AM': 'Grappling / Muay Thai',
                '8:30AM To 10:00AM': 'Muay Thai / Boxing',
                '5:00AM To 6:30PM': 'Grappling / Muay Thai',
                '7:00AM To 8:30PM': 'Muay Thai / Boxing'
            },
            { 
                day: 'Friday',
                '6:30AM To 8:00AM': 'Muay Thai / Kickboxing',
                '8:30AM To 10:00AM': 'Muay Thai / Kickboxing',
                '5:00AM To 6:30PM': 'Muay Thai / Kickboxing',
                '7:00AM To 8:30PM': 'Muay Thai / Kickboxing'
            },
            { 
                day: 'Saturday',
                '6:30AM To 8:00AM': 'Road Running', 
                '8:30AM To 10:00AM': '', // No classes on Saturday
                '5:00AM To 6:30PM': 'Weight Training', // No classes on Saturday
                '7:00AM To 8:30PM': '' // No classes on Saturday
            },
            { 
                day: 'Sunday',
                '6:30AM To 8:00AM': 'Sparring', // No classes on Sunday
                '8:30AM To 10:00AM': '', // No classes on Sunday
                '5:00AM To 6:30PM': '  ', 
                '7:00AM To 8:30PM': '' // No classes on Sunday
            }
        ],
        []
    );

    const columns: Column<ClubData>[] = React.useMemo(
        () => [
            { Header: 'Days/Timings', accessor: 'day' },
            { Header: '6:30AM To 8:00AM', accessor: '6:30AM To 8:00AM' },
            { Header: '8:30AM To 10:00AM', accessor: '8:30AM To 10:00AM' },
            { Header: '5:00AM To 6:30PM', accessor: '5:00AM To 6:30PM' },
            { Header: '7:00AM To 8:30PM', accessor: '7:00AM To 8:30PM' }
        ],
        []
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable<ClubData>({ columns, data });

    return (
        <div className='bg-black p-5' style={{ maxWidth: '100%', overflowX: 'auto' }}>
            <h1 className='font-black_ops_one text-[#f9d112] text-center text-4xl mb-5'>Weekly Schedule</h1>
            <table {...getTableProps()} className='w-full border-collapse'>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps()} className='px-4 py-2 text-[#f9d112] text-center border border-[#f9d112]'>
                                    {column.render('Header')}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map(row => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return (
                                        <td {...cell.getCellProps()} className='px-4 py-2 border border-[#f9d112] text-red-700'>
                                            {cell.render('Cell')}
                                        </td>
                                    );
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <div className='mt-5' style={{ maxWidth: '100%' }}>
                <div className='bg-[#f9d112] p-5 rounded-lg text-center'>
                    <h2 className='font-black_ops_one text-[#000000] text-2xl mb-2'>Note:</h2>
                    <p><b>Participation in light sparring and sparring sessions is optional and based on individual preference, interest, and physical ability.</b></p>
                    <p><b>The intensity of workouts may vary according to the fitness levels of both clients and fighters.</b></p>
                    <p><b>
                        Sunday sparring is specifically designed for fighters preparing for tournaments. It serves as an initiative by Dynamics101 
                        to motivate fighters to engage in consistent training throughout the week.
                        </b></p>
                </div>
            </div>
            <br></br>
            <div className='flex justify-center mt-5'>
                <a href="#" onClick={() => { mainComponent?.setMainComponent(MainComponentContextType.CONTACT) }} className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white rounded-lg bg-red-700 ">
                    Contact Us
                </a>
            </div>
        </div>
    );
}

