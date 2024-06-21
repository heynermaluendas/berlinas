import React, { useState, useEffect } from 'react';
import { PageContainer } from '@ant-design/pro-components';
import { Input } from 'antd';
import { Tabla } from '@/components';



const tabList = [
  {
    key: 'siniestro',
    tab: 'Siniestro',
  },
  {
    key: 'administrativo',
    tab: 'Administrativo',
  },
  {
    key: 'funcionamiento',
    tab: 'Funcionamiento',
  },
  {
    key: 'vehiculos',
    tab: 'Vehiculos',
  },
];

const Search = () => {
  const [activeTabKey, setActiveTabKey] = useState('siniestro');
  const [searchValue, setSearchValue] = useState('');
  const [tablaData, setTablaData] = useState([]);

  

 
  const handleTabChange = (key) => {
    setActiveTabKey(key);
  };
  const handleFormSubmit = (value) => {
    
  
  };

  const renderContent = () => {
    
    const filteredData = tablaData.filter(item => item.nombre.toLowerCase().includes(searchValue.toLowerCase()));

    switch (activeTabKey) {
      case 'siniestro':
        return <Tabla data={filteredData} />;
      case 'administrativo':
        return <Tabla data={filteredData} />;
      case 'funcionamiento':
        return <Tabla data={filteredData} />;
      case 'vehiculos':
        return <Tabla data={filteredData} />;
      default:
        return null;
    }
  };

  return (
    <PageContainer
      content={
        <div style={{ textAlign: 'center' }}>
          <Input.Search
            placeholder="Por favor escribe"
            enterButton="Buscar"
            size="large"
            onSearch={handleFormSubmit}
            style={{ maxWidth: 522, width: '100%' }}
          />
        </div>
      }
      tabList={tabList}
      tabActiveKey={activeTabKey}
      onTabChange={handleTabChange}
    >
      {renderContent()}
    </PageContainer>
  );
};

export default Search;
