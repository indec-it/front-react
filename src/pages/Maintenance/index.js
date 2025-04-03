import maintenanceImg from '@root/public/maintenance.jpg';

function Maintenance() {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col gap-4 p-5 items-center shadow-md">
        <img src={maintenanceImg} className="h-50 w-auto sm:h-100" />
        <h1 className="font-bold text-3xl">Sistema en mantenimiento</h1>
        <h2 className="text-xl">Nos encontramos en un breve mantenimiento, por favor vuelva en unos minutos.</h2>
        <h2 className="text-xl">Muchas gracias.</h2>
      </div>
    </div>
  );
}

export default Maintenance;
