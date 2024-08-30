import React from 'react'

interface ListProps {
    lists: {id:string; title: string; completed:boolean}[]
}

export const List: React.FC<ListProps> = ({lists}) => {

    return(
        <ul>
            {lists.map( (list) => {
                return (
                    <li key = {list.id}>
                        {list.title}
                    </li>
                );
            })}
        </ul>
    );
  };

