import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { selectDetail } from '../../services/bobs-burgers';
import DetailCard from '../../components/DetailCard/DetailCard';
import { useHistory } from 'react-router-dom';

export default function Detail() {
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState([]);

  const { select, id } = useParams();
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      const data = await selectDetail(select, id);
      setSelected(data);
      setLoading(false);
    };
    fetchData();
  }, [select, id]);

  const handleClick = () => {
    history.push(`/${select}`);
  };

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <DetailCard
            selected={selected}
            handleClick={handleClick}
            select={select}
          />
        </>
      )}
    </div>
  );
}
