import { QuestionCircleOutlined,BellOutlined  } from '@ant-design/icons';
import React, { useState,useEffect } from 'react';
import { Badge, Button,Modal,Table,Form,Input } from 'antd';
import ExportToExcel from './ExportToExcel';
import { SelectLang as UmiSelectLang } from '@umijs/max';
import axios from 'axios';



 const baseURl= 'http://192.168.0.115:3001/artista'
const {Item} = Form;
 const layout={
   labelCol:{
     span: 8
   },
   wrapperCol:{
     span:16
   }
 }

export type SiderTheme = 'light' | 'dark';





export const SelectLang= () => {
  return (
    <UmiSelectLang />
  );
};
export const Question = () => {
  return (
    <div
      style={{
        display: 'flex',
        height: 26,
      }}
      onClick={() => {
        window.open('https://pro.ant.design/docs/getting-started');
      }}
    >
      <QuestionCircleOutlined />
    </div>
  );
};

export const Tabla = () => {
  const [data, setData] = useState([]);
  const [modalEditar, setModalEditar] = useState(false);
  const [artista, setArtista] = useState({
    id: '',
    variable: '',
    indicadores: '',
    fecha: '',
    valor: '',
    dato: ''
  });

  

  const abrirCerrarModalEditar = () => {
    setModalEditar(!modalEditar);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setArtista({ ...artista, [name]: value });
  };

  const handleDoubleClick = (record) => {
    setArtista(record);
  };

  const handleInputChange = (e) => {
    const { value } = e.target;
    setArtista({ ...artista, valor: value });
  };

  const columns = [
    {
      title: 'variable',
      dataIndex: 'variable',
      key: 'variable'
    },
    {
      title: 'indicadores',
      dataIndex: 'indicadores',
      key: 'indicadores'
    },
    {
      title: 'fecha',
      dataIndex: 'fecha',
      key: 'fecha'
    },
    {
      title: 'valor',
      dataIndex: 'valor',
      key: 'valor',
      render: (text, record) => (
        <div  style={{  textAlign: 'center',padding: '0', width: '100px'  }} onDoubleClick={() => handleDoubleClick(record)}>
          {record.id === artista.id ? (
            <Input
            value={record.id === artista.id ? artista.valor : text}
            onChange={handleInputChange}
            autoFocus
            style={{
              width: '100px',
              textAlign: 'center',
              border: 'none',
              background: 'transparent',
              outline: 'none',
              boxShadow: 'none',
              padding: '0'
            }}
          />
          ) : (
            text
          )}
        </div>
      )
    },
    {
      title: 'dato',
      dataIndex: 'dato',
      key: 'dato'
    }
  ];

  const peticionGet = async () => {
    try {
      const response = await axios.get(baseURl);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const peticionPut = async () => {
    try {
      await axios.put(`${baseURl}/${artista.id}`, artista);
      const dataAuxiliar = data.map((elemento) => {
        if (elemento.id === artista.id) {
          return {
            ...elemento,
            variable: artista.variable,
            indicadores: artista.indicadores,
            fecha: artista.fecha,
            valor: artista.valor,
            dato: artista.dato
          };
        }
        return elemento;
      });
      setData(dataAuxiliar);
      abrirCerrarModalEditar();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    peticionGet();
  }, []);

  useEffect(() => {
    if (artista.id) {
      peticionPut();
    }
  }, [artista.valor]);

  return (
    <div className="app">
      <ExportToExcel fileName="data" data={data} />

      <Table columns={columns} dataSource={data} />

      
    </div>
  );
};
