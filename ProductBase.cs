public abstract class ProductBase
{
    public int id { get; set; }
    public string name { get; set; }
    public string state { get; set; }
    public string? notes { get; set; }
    [ForeignKey("groupId")]
    public ProductBase? GroupParent { get; set; }
    public abstract int getCount();
    public virtual void add(ProductBase prod) { throw new Exception("It is not a group!"); }
    public virtual void addRange(List<Product> prods) { throw new Exception("It is not a group!"); }
    //public virtual void addRange(List<ProductBase> prods) { throw new Exception("It is not a group!"); }
    public virtual void addRange(List<PGroup> prods) { throw new Exception("It is not a group!"); }
    public virtual void remove(ProductBase prod) { throw new Exception("It is not a group!"); }
    // [ForeignKey("bs")]
    // public int? ProductBaseId { get; set; }
}