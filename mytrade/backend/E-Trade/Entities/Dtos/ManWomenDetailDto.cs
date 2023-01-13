namespace Entities.Dtos
{
    public class ManWomenDetailDto
    {
        public string AyakkabiTipi { get; set; }
        public string Malzeme { get; set; }
        public string Cinsiyet { get; set; }
        public string YakaStili { get; set; }
        public string Tipi { get; set; }
        public string Image1 { get; set; }
        public string Image2 { get; set; }
        public string Image3 { get; set; }

        public int BrandId { get; set; }
        public int SizeId { get; set; }
        public int NumberId { get; set; }
        public int ColorId { get; set; }
    }
}
