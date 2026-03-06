function DashboardHome() {

  return (

    <div className="grid grid-cols-3 gap-6">

      <div className="bg-white shadow rounded p-5">
        <h3 className="text-gray-500">Total Products</h3>
        <p className="text-3xl font-bold">10</p>
      </div>

      <div className="bg-white shadow rounded p-5">
        <h3 className="text-gray-500">Categories</h3>
        <p className="text-3xl font-bold">3</p>
      </div>

      <div className="bg-white shadow rounded p-5">
        <h3 className="text-gray-500">Active Users</h3>
        <p className="text-3xl font-bold">5</p>
      </div>

    </div>

  );
}

export default DashboardHome;