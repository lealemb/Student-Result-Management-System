import React, { useState } from "react";

const PaymentStatus = () => {
  const [payments, setPayments] = useState([
    {
      id: 1,
      studentName: "Abebe Kebede",
      amount: 100,
      status: "Paid",
      date: "2024-09-01",
      method: "Bank Transfer",
    },
    {
      id: 2,
      studentName: "Chala G/hiwot",
      amount: 150,
      status: "Pending",
      date: "2024-09-10",
      method: "Cash",
    },
    {
      id: 3,
      studentName: "Abraham Yohannes",
      amount: 200,
      status: "Paid",
      date: "2024-09-05",
      method: "Mobile Payment",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");
  const [editablePayment, setEditablePayment] = useState(null);
  const [formData, setFormData] = useState({
    studentName: "",
    amount: "",
    status: "",
    date: "",
    method: "",
  });

  const handleEdit = (payment) => {
    setEditablePayment(payment.id);
    setFormData(payment);
  };

  const handleDelete = (id) => {
    setPayments(payments.filter((payment) => payment.id !== id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editablePayment) {
      setPayments(
        payments.map((payment) =>
          payment.id === editablePayment
            ? { ...formData, id: editablePayment }
            : payment
        )
      );
      setEditablePayment(null);
    } else {
      const newPayment = { ...formData, id: payments.length + 1 };
      setPayments([...payments, newPayment]);
    }
    setFormData({
      studentName: "",
      amount: "",
      status: "",
      date: "",
      method: "",
    });
  };

  const filteredPayments = payments.filter(
    (payment) =>
      (filterStatus === "All" || payment.status === filterStatus) &&
      payment.studentName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2 className="text-xl font-bold">Payment Status</h2>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by Student Name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border rounded p-2"
        />
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="border rounded p-2 ml-2"
        >
          <option value="All">All</option>
          <option value="Paid">Paid</option>
          <option value="UnPaid">UnPaid</option>
        </select>
      </div>

      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          placeholder="Student Name"
          value={formData.studentName}
          onChange={(e) =>
            setFormData({ ...formData, studentName: e.target.value })
          }
          required
          className="border rounded p-2 mr-2"
        />
        <input
          type="number"
          placeholder="Amount"
          value={formData.amount}
          onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
          required
          className="border rounded p-2 mr-2"
        />
        <select
          value={formData.status}
          onChange={(e) => setFormData({ ...formData, status: e.target.value })}
          required
          className="border rounded p-2 mr-2"
        >
          <option value="">Select Status</option>
          <option value="Paid">Paid</option>
          <option value="UnPaid">UnPaid</option>
        </select>
        <input
          type="date"
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          required
          className="border rounded p-2 mr-2"
        />
        <input
          type="text"
          placeholder="Payment Method"
          value={formData.method}
          onChange={(e) => setFormData({ ...formData, method: e.target.value })}
          required
          className="border rounded p-2 mr-2"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white rounded px-4 py-2"
        >
          {editablePayment ? "Update Payment" : "Add Payment"}
        </button>
      </form>

      <div className="overflow-x-auto mt-4">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="border px-4 py-2">Student Name</th>
              <th className="border px-4 py-2">Amount</th>
              <th className="border px-4 py-2">Status</th>
              <th className="border px-4 py-2">Payment Date</th>
              <th className="border px-4 py-2">Payment Method</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredPayments.map((payment) => (
              <tr key={payment.id}>
                <td className="border px-4 py-2">{payment.studentName}</td>
                <td className="border px-4 py-2">{payment.amount} Birr</td>
                <td className="border px-4 py-2">{payment.status}</td>
                <td className="border px-4 py-2">{payment.date}</td>
                <td className="border px-4 py-2">{payment.method}</td>
                <td className="border px-4 py-2">
                  <button
                    className="bg-blue-500 text-white px-2 py-1 mr-2"
                    onClick={() => handleEdit(payment)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white px-2 py-1"
                    onClick={() => handleDelete(payment.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentStatus;
