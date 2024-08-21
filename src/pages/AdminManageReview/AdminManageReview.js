import React from 'react';
import AgriMartAdminNavBar from '../../components/AgriMartAdminNavBar/AgriMartAdminNavBar';
import './AdminManageReview.css';
import AgriMartFooter from '../../components/AgriMartFooter/AgriMartFooter';
import AgriMartAdminSideBar from '../../components/AgriMartSideBar/AgriMartSideBar';
import { Rate } from 'antd';
import { AiFillDelete } from "react-icons/ai";
import { AiOutlineEdit  } from "react-icons/ai";
import { Form, InputNumber, Popconfirm, Table, Typography, Input } from 'antd';
import { useState } from 'react';
import { QuestionCircleOutlined } from '@ant-design/icons';
import DeleteIcon from '@mui/icons-material/Delete';
const originData = [];

for (let i = 0; i < 100; i++) {
    originData.push({
      key: i.toString(),
      name: `Edrward ${i}`,
      age: 32,
      address: `London Park no. ${i}`,
    });
  }
  const EditableCell = ({
    editing,
    dataIndex,
    title,
    inputType,
    record,
    index,
    children,
    ...restProps
  }) => {
    const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};
const App = () => {
    const [form] = Form.useForm();
    const [data, setData] = useState(originData);
    const [editingKey, setEditingKey] = useState('');
  
    const isEditing = (record) => record.key === editingKey;
  
    const edit = (record) => {
      form.setFieldsValue({
        name: '',
        age: '',
        address: '',
        ...record,
      });
      setEditingKey(record.key);
    };
  
    const cancel = () => {
      setEditingKey('');
    };
  
    const save = async (key) => {
      try {
        const row = await form.validateFields();
        const newData = [...data];
        const index = newData.findIndex((item) => key === item.key);
  
        if (index > -1) {
          const item = newData[index];
          newData.splice(index, 1, { ...item, ...row });
          setData(newData);
          setEditingKey('');
        } else {
          newData.push(row);
          setData(newData);
          setEditingKey('');
        }
      } catch (errInfo) {
        console.log('Validate Failed:', errInfo);
      }
    };
  
    const columns = [
      {
        title: 'name',
        dataIndex: 'name',
        width: '25%',
        editable: true,
      },
      {
        title: 'age',
        dataIndex: 'age',
        width: '15%',
        editable: true,
      },
      {
        title: 'address',
        dataIndex: 'address',
        width: '40%',
        editable: true,
      },
      {
        title: 'operation',
        dataIndex: 'operation',
        render: (_, record) => {
          const editable = isEditing(record);
          return editable ? (
            <span>
              <Typography.Link
                onClick={() => save(record.key)}
                style={{
                  marginRight: 8,
                }}
              >
                Save
              </Typography.Link>
              <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
                <a>Cancel</a>
              </Popconfirm>
            </span>
          ) : (
            <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
              Edit
            </Typography.Link>
          );
        },
      },
    ];
    const mergedColumns = columns.map((col) => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: (record) => ({
          record,
          inputType: col.dataIndex === 'age' ? 'number' : 'text',
          dataIndex: col.dataIndex,
          title: col.title,
          editing: isEditing(record),
        }),
      };
    });
    return (
      <Form form={form} component={false}>
        <Table
          components={{
            body: {
              cell: EditableCell,
            },
          }}
          bordered
          dataSource={data}
          columns={mergedColumns}
          rowClassName="editable-row"
          pagination={{
            onChange: cancel,
          }}
        />
      </Form>
    );
  };
  

function AdminManageReview () {
    
    return (
        <div>
          <div>
            <AgriMartAdminNavBar />

        </div>
       
        <div className='main'>
                <h2  class="txt-header">Reviews</h2>
                <div style={{float:'left', position:'fixed'}}><AgriMartAdminSideBar/></div>
                
                <div className='subMain' style={{margin:'0px 100px 0px 210px', position:'relative'}} >
                <table class="table table-borderless table-dark">
                    <thead>
                        <tr>
                        <th scope="col-md-2 col-md-2-5">Reviewer</th>
                        <th scope="col-md-5">Review</th>
                        <th scope="col-md-4 col-md-4-5">Status</th>
                        <th scope="col-md-4 col-md-4-5">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>S.U.Silva</td>
                        <td><Rate allowHalf defaultValue={2.5}></Rate> <tr>Highly reccommended</tr> </td>
                        <td>Published</td>
                        <td ><Popconfirm
                        title="Are you sure？"
                        icon={
                          <QuestionCircleOutlined
                            style={{
                              color: 'red',
                            }}
                            // onOk={() => removeItem(item.id)}
                          />
                        }
                      ><button className='btn ms-2' >
                         <DeleteIcon className='deleteicon'/>
                       </button>
                      </Popconfirm></td>
                        </tr>
                    
                    </tbody>
                </table>
                </div>
            </div>
            <div className='size'>
           
</div>
        <div>
            <AgriMartFooter/>

        </div>
    </div>

      );
}

export default AdminManageReview;