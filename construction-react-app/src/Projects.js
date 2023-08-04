import React from 'react'
import { Table } from 'antd';

function Projects() {
    const dataSource = [
        {
          key: '1',
          name: 'Public Architects',
          type:'Landscape',
          description:'A public garden is an institution that maintains plants for the purposes of public education and enjoyment	',
          image: 'https://unsplash.com/photos/QJQrkuNj9P8'
        },
        {
          key: '2',
          name: 'Art Deco',
          type:'Interior',
          description:'harmonious, clean, geometric, sleek, usually uncomplicated, and visually pleasing artworks',
          image: 'https://www.pexels.com/photo/sears-tower-usa-1722183/'

        },
        {
          key: '3',
          name: 'Modern Architecture',
          type:'Architecture',
          description:'Modern architecture is a style of building that emphasizes function and a streamlined form over ornamentation.'
        },
        {
          key: '4',
          name: 'Classical Architecture',
          type:'Architecture',
          description:'Classical architecture originated in ancient Greece and Rome, and is characterized by symmetry, columns, rectangular windows, and marble'
        }
        
      ];
      
      const columns = [
        {
          title: 'Project Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Project Type',
          dataIndex: 'type',
          key: 'type',
        },
        {
          title: 'Description',
          dataIndex: 'description',
          key: 'description',
        },
        {
          title: 'Image',
          dataIndex: 'image',
          key: 'image',
          render: (image) => <img src={image} alt="User Avatar" style={{ width: '100px', height: '100px'}} />
        },
        {
          title: 'Actions',
          dataIndex: 'actions',
          key: 'actions',
        }
      ];
      
  return (
    <div className='project-data'>
      <button>Create New</button>
      <h2>List of all projects</h2>
      <Table 
        dataSource={dataSource} 
        columns={columns}  
        className='projects-table'
        pagination={{className:'pagination-style'}}
        />
    </div>
  )
}

export default Projects
