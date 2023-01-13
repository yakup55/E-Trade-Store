using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities.Dtos
{
    public class PcDetailDto
    {

        public string SDDKapasite { get; set; }
        public string RamTipi { get; set; }
        public string Ram { get; set; }
        public string EkranCozunurlugu { get; set; }
        public string İslemciNesli { get; set; }
        public string İslemciTipi { get; set; }
        public string EkranYenilemeHizi { get; set; }
        public string EkranBoyutu { get; set; }
        public string BellekHizi { get; set; }
        public string CihazAgirligi { get; set; }
        public string Image1 { get; set; }
        public string Image2 { get; set; }
        public string Image3 { get; set; }

        public int BrandId { get; set; }
        public int ColorId { get; set; }


    }
}
