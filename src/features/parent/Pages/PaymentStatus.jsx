import PageLayout from "../Components/PageLayout";

function PaymentStatus() {
  const paymentData = {

    studentName: 'Abraham Yohannes',
    studentId: 'ST/2213/6',
    amount: '200 Birr',
    status: 'Paid',
    paymentDate: '2024-09-05',
    paymentMethod: 'Mobile Payment',
  };
 
  return (
    <div className="ml-64 flex-1 bg-gray-100 p-6 mt-[65px]">
      <PageLayout userName="Abebe" pageTitle="Payment Status">
        {/* Styled Table */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <table className="w-full text-sm text-left text-gray-800 border border-gray-200">
            <thead className="text-xs font-semibold uppercase bg-gray-100 text-gray-600">
              <tr>
                <th scope="col" className="py-3 px-6 border border-gray-300">Student Name</th>
                <th scope="col" className="py-3 px-6 border border-gray-300">Student Id </th>

                <th scope="col" className="py-3 px-6 border border-gray-300">Amount</th>
                <th scope="col" className="py-3 px-6 border border-gray-300">Status</th>
                <th scope="col" className="py-3 px-6 border border-gray-300">Payment Date</th>
                <th scope="col" className="py-3 px-6 border border-gray-300">Payment Method</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-50">
                <td className="py-4 px-6 border border-gray-300">{paymentData.studentName}</td>
                <td className="py-4 px-6 border border-gray-300">{paymentData.studentId}</td>

                <td className="py-4 px-6 border border-gray-300">{paymentData.amount}</td>
                <td className="py-4 px-6 border border-gray-300">{paymentData.status}</td>
                <td className="py-4 px-6 border border-gray-300">{paymentData.paymentDate}</td>
                <td className="py-4 px-6 border border-gray-300">{paymentData.paymentMethod}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </PageLayout>
    </div>
  );
}

export default PaymentStatus;
