function Breadcrumb() {
  return (
    <div>
      <div>
        <a class="text-primary text-base font-open font-normal" to="/">Inicio</a> <span class="text-secondary text-base font-open font-normal"> > Name</span>
      </div>
      <h1 class="font-semibold text-xl font-montserrat text-primary">{{title}}</h1>
    </div>
  )
}

export default Breadcrumb