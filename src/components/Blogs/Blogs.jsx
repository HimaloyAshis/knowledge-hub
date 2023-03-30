import React from 'react';
import Card from '../Card/Card';

const Blogs = ({Data}) => {
    return (
        <div>
            {
                Data.map(data=><Card data={data}></Card>)
            }
        </div>
    );
};

export default Blogs;