namespace WebApplication1.Models
{
    public class CategoriaProducto
    {
        public int caprId { get; set; }
        public int caprCodigo { get; set; }
        public string caprNombre { get; set; }
        public string caprNombreRuta { get; set; }
        public string caprPadre { get; set; }
        public string caprStatus { get; set; }
        public List<CatalogoProd> catalogoProd { get; set; }
    }

    public class CatalogoProd
    {
        public int cproId { get; set; }
        public int cproCodigo { get; set; }
        public int caprId { get; set; }
        public int unidCodigo { get; set; }
        public string cproCodigoint { get; set; }
        public string cproCodigobarras { get; set; }
        public string cproNombre { get; set; }
        public string cproDescripcion { get; set; }
        public string cproMarca { get; set; }
        public string cproUbicacion { get; set; }
        public int? cproTipoPrecio { get; set; }
    }
}