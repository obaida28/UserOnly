public class PGroup : ProductBase
{
    [NotMapped]
    public List<ProductBase> Products { get; set; }
    public PGroup()
    {
        Products = new List<ProductBase>();
    }
    public override void add(ProductBase prod) 
    {
        Products.Add(prod);
        prod.GroupParent = this;
    }
    public override void addRange(List<Product> prods) 
    {
        Products.AddRange(prods);
        prods.ForEach(p => p.GroupParent = this);
    }
    public override void addRange(List<PGroup> prods) 
    {
        Products.AddRange(prods);
        prods.ForEach(p => p.GroupParent = this);
    }
    public override void remove(ProductBase prod) 
    {
        if(Products.Contains(prod)){
            Products.Remove(prod);
            prod.GroupParent = null;
        }
    }
    public override int getCount()
    {
        int count = 0;
        foreach(ProductBase prod in Products)
            count += prod.getCount();
        return count;
    }
}