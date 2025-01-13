import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='mx-auto w-10/12 flex flex-col gap-6 justify-center items-center'>
        <h1 className='text-5xl text-center'>404 Not Found</h1>
        <Link to='/' className='btn w-40 btn-outline'>Back</Link>
        </div>
    );
};

export default ErrorPage;