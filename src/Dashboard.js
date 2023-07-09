import './Dashboard.css';

const Dashboard = ({ displayName }) => {
  return (
    <div className="Dashboard">
      <h1 className='heading-shadow mb-10'>Good afternoon!</h1>
      <div className="flex gap-4 w-screen h-min sm:px-5 md:px-20 lg:px-40 border-box mb-5">
        <div className="rounded-xl module lg:w-1/2 p-8 border-box text-center sm:text-2xl lg:text-3xl font-medium">
            <h4><b>{displayName}</b></h4>
            <h4>Class of 2026</h4>
        </div>
        <div className="rounded-xl module w-5/4 p-6 border-box max-h-[250px] overflow-hidden">
            <p className='sm:text-xl lg:text-2xl text-ellipses'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, doloremque! Quos nobis culpa nisi nostrum at, magni sed maiores perferendis.</p>
        </div>
      </div>
      <div className="module rounded-xl h-min px-10 lg:px-20 py-4 lg:py-8 border-box sm:mx-5 md:mx-20 lg:mx-40 mb-40">
            <p className='text-xl lg:text-2xl text-center'>You are currently paired with <b>John Doe</b>.</p>
        </div>
    </div>
  );
}

export default Dashboard;
