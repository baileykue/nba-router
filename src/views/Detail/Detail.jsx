import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { selectDetail } from '../../services/bobs-burgers';
import DetailCard from '../../components/DetailCard/DetailCard';

export default function Detail() {
  const [loading, setLoading] = useState(true);
  const { select, id } = useParams();
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await selectDetail(select, id);
      setSelected(data);
      setLoading(false);
    };
    fetchData();
  }, [select, id]);

  console.log(selected);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <DetailCard selected={selected} select={select} />
        </>
      )}
    </div>
  );
}
