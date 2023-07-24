const Partners = ({ dark }) => {
  return (
    <div className="devman_tm_section">
      <div className="devman_tm_partners">
        <div className="container">
          <div className="devman_tm_main_title" data-text-align="center">
            <span>Socios destacados</span>
            <h3>Empresas que confían en nosotros</h3>
          </div>
          <br />
          <br />
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <img class="h-auto max-w-full rounded-lg" src="imagenes/empresas/black.png" alt="" />
            </div>
            <div>
              <img class="h-auto max-w-full rounded-lg" src="imagenes/empresas/casaCoraje.jpg" alt="" />
            </div>
            <div>
              <img class="h-auto max-w-full rounded-lg" src="imagenes/empresas/partWelivery.jpg" alt="" />
            </div>
            <div>
              <img class="h-auto max-w-full rounded-lg" src="imagenes/empresas/zendit.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Partners;
