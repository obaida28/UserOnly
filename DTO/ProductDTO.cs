public class ProductDTO
{
    public ProductBase ele { get; set; }
    public List<ProductDTO> sons { get; set; }
    public List<Product> prods { get; set; }
    public List<PGroup> groups { get; set; }
    public List<ProductDTO> convert(IEnumerable<ProductBase> lists)
    {
        var list = new List<ProductDTO>();
        lists.ToList().ForEach(g => list.Add
        (
            new ProductDTO()
            {
                ele = g,
                sons = new List<ProductDTO>()
            }
        ));
        return list;
    }
    public List<ProductDTO> do_Tree(List<PGroup> groups , List<Product> prods) 
    {
        this.prods = prods;
        this.groups = groups;
        return add_sons(convert(groups.Where(g => g.GroupParent == null).ToList()));
    }
    public List<ProductDTO> add_sons(List<ProductDTO> list) 
    {
        if(list.Count == 0)
            return list;
        list.ForEach(li => li.sons.AddRange(
            li.convert(groups.Where(g => g.GroupParent == li.ele).ToList())
        ));
        list.ForEach(li => li.sons.AddRange(
            li.convert(prods.Where(p => p.GroupParent == li.ele).ToList())
        ));
        list.ForEach(li => li.sons = add_sons(li.sons));
        return list;
    }
}