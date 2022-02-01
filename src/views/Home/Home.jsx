import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSelected } from '../../services/bobs-burgers';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const { select } = useParams();
  const [selected, setSelected] = useState('characters');

  useEffect(() => {
    const fetchData = async () => {
      const data = await getSelected(select);
      setSelected(data);
      setLoading(false);
    };
    fetchData();
  }, [select]);

  console.log(selected);

  return (
    <div>
      <p>this is the home page</p>
    </div>
  );
}
