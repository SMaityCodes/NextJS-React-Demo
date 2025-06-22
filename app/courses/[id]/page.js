import React from 'react';

export default async function Home({ params }) {
    const { id } = await params;

    const myArr = [
        { Field1: "12", Field2: "Abcd" },
        { Field1: "22", Field2: "Efgh" },
    ];

    if (isNaN(id) || id < 0 || id >= myArr.length) {
        return (<main className="mt-10">Invalid course ID.</main>);
    }

    return (
        <main className="mt-10">
            <div>
                Details of course:
                <ul>
                    <li> CourseID: {myArr[id].Field1} </li>
                    <li> CourseTitle: {myArr[id].Field2} </li>
                </ul>
            </div>
        </main>
    );
}

