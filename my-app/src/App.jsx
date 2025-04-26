import React, { useState } from "react";
import Form from "./component/Form";
import Table from "./component/Table";

const App = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [data, setData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    if (!formData.name || !formData.email) return;

    if (editIndex !== null) {
      const updatedData = [...data];
      updatedData[editIndex] = formData;
      setData(updatedData);
      setEditIndex(null);
    } else {
      setData([...data, formData]);
    }

    setFormData({ name: "", email: "" });
  };

  const handleEdit = (index) => {
    setFormData(data[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updated = [...data];
    updated.splice(index, 1);
    setData(updated);
  };

  return (
    <div>

      <Form
        formData={formData}
        handleChange={handleChange}
        handleSave={handleSave}
        editIndex={editIndex}
      />

      <Table
        data={data}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />

    </div>
  );
};

export default App;
