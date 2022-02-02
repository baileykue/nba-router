import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSelected } from '../../services/bobs-burgers';
import List from '../../components/List/List';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const { select } = useParams();
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getSelected(select);
      setSelected(data);
      setLoading(false);
    };
    fetchData();
  }, [select]);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <List selected={selected} select={select} />
        </>
      )}
    </div>
  );
}
