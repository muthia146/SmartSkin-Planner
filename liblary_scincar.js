      // --- Skincare Library Modal Logic (No changes needed) ---
      const ingredientDetails = {
        Retinol: {
          benefits: [
            "Mengurangi kerutan & garis halus.",
            "Meningkatkan pergantian sel kulit.",
            "Merangsang produksi kolagen.",
            "Membantu mengatasi jerawat.",
          ],
          usage: [
            "Gunakan pada malam hari.",
            "Mulai dengan frekuensi rendah (1-2x seminggu), tingkatkan secara bertahap.",
            "Aplikasikan setelah membersihkan wajah dan sebelum pelembap.",
            "Wajib menggunakan sunscreen di pagi hari.",
          ],
          warnings: [
            "Dapat menyebabkan iritasi, kemerahan, dan kekeringan di awal penggunaan (retinisasi).",
            "Hindari penggunaan bersamaan dengan AHA/BHA atau Vitamin C LAA potensi tinggi di waktu yang sama.",
            "Tidak disarankan untuk ibu hamil/menyusui.",
          ],
          tips: "Gunakan metode sandwich (pelembap - retinol - pelembap) untuk mengurangi potensi iritasi.",
        },
        Retinal: {
          benefits: [
            "Lebih poten dari retinol, konversi ke asam retinoat lebih cepat.",
            "Manfaat anti-aging dan anti-jerawat.",
            "Seringkali lebih bisa ditoleransi daripada tretinoin.",
          ],
          usage: [
            "Gunakan pada malam hari.",
            "Mulai dengan frekuensi rendah (1-2x seminggu), tingkatkan perlahan.",
            "Wajib sunscreen di pagi hari.",
          ],
          warnings: [
            "Potensi iritasi tetap ada, terutama jika baru menggunakan retinoid.",
            "Tidak disarankan untuk ibu hamil/menyusui.",
          ],
          tips: "Pilihan baik jika retinol terasa kurang efektif namun tretinoin terlalu kuat. Dapat digunakan sebagai langkah lanjutan setelah kulit terbiasa dengan retinol.",
        },
        Adapalene: {
          benefits: [
            "Efektif untuk jerawat komedonal dan inflamasi.",
            "Menormalkan diferensiasi sel kulit.",
            "Mengurangi pembentukan mikrokomedo.",
          ],
          usage: [
            "Biasanya digunakan sekali sehari di malam hari.",
            "Aplikasikan tipis-tipis pada area yang berjerawat setelah kulit dibersihkan dan dikeringkan.",
            "Resep dokter di beberapa negara, OTC (Over-The-Counter) di negara lain untuk konsentrasi tertentu (misal 0.1%).",
          ],
          warnings: [
            "Dapat menyebabkan kekeringan, kemerahan, dan iritasi di awal penggunaan.",
            "Hindari paparan sinar matahari berlebih dan selalu gunakan sunscreen.",
            "Jangan gunakan pada kulit yang luka atau eksim.",
          ],
          tips: "Gunakan pelembap non-komedogenik untuk membantu mengatasi kekeringan. Hasil biasanya terlihat setelah 8-12 minggu penggunaan rutin.",
        },
        Tretinoin: {
          benefits: [
            "Gold standard retinoid, sangat efektif untuk anti-aging (kerutan, hiperpigmentasi) dan jerawat parah.",
            "Memperbaiki kerusakan akibat sinar matahari secara signifikan.",
            "Meningkatkan ketebalan epidermis.",
          ],
          usage: [
            "HANYA DENGAN RESEP DOKTER.",
            "Dosis dan frekuensi ditentukan secara individual oleh dokter kulit.",
            "Gunakan sangat hati-hati, biasanya dimulai dengan konsentrasi terendah dan frekuensi sangat jarang.",
            "Hanya malam hari.",
          ],
          warnings: [
            "Risiko iritasi, kekeringan, pengelupasan sangat tinggi.",
            "Tidak untuk ibu hamil atau berencana hamil.",
            "Fotosensitivitas sangat tinggi, penggunaan sunscreen SPF tinggi adalah mutlak.",
            "Banyak kontraindikasi dan interaksi obat.",
          ],
          tips: "Selalu ikuti instruksi dokter kulit dengan ketat. Proses adaptasi bisa sangat menantang.",
        },
        "Vitamin C (Synthetic)": {
          benefits: [
            "Mencerahkan kulit kusam dan tidak merata",
            "Memudarkan bekas jerawat & flek hitam",
            "Meratakan warna kulit dengan menghambat tirosinase",
            "Melindungi dari kerusakan sinar UV (bukan pengganti sunscreen)",
            "Meningkatkan produksi kolagen hingga 80%",
            "Menstabilkan vitamin E dalam kulit",
          ],
          usage: [
            "Idealnya digunakan PAGI HARI untuk perlindungan antioksidan",
            "Aplikasikan pada kulit bersih setelah cleanser, sebelum pelembap & sunscreen",
            "Mulai dengan konsentrasi rendah (5-10%) jika baru/sensitif",
            "L-Ascorbic Acid (LAA) paling poten tapi kurang stabil & butuh pH rendah (3.5)",
            "Turunan (SAP, MAP, Ascorbyl Glucoside) lebih stabil & lembut",
            "Simpan di tempat sejuk, gelap, kedap udara (terutama LAA)",
            "Selalu pakai sunscreen (SPF 30+)",
          ],
          warnings: [
            "Hindari layering langsung LAA dengan Niacinamide (potensi 'flushing')",
            "Beri jeda waktu 30 menit atau gunakan beda waktu/hari",
            "Mungkin menyebabkan stinging pada kulit sensitif",
            "Hindari penggunaan dengan retinol dalam rutin yang sama",
            "Perhatikan perubahan warna produk (oksidasi - jadi kuning/coklat)",
            "Jangan gunakan bersamaan dengan benzoyl peroxide",
          ],
          tips: "Untuk kulit sensitif, mulai dengan vitamin C turunan seperti Sodium Ascorbyl Phosphate (SAP) yang lebih lembut atau Tetrahexyldecyl Ascorbate yang larut minyak. LAA 15-20% paling efektif tetapi berisiko iritasi.",
        },
        "Vitamin E": {
          benefits: [
            "Antioksidan kuat untuk melawan radikal bebas",
            "Menstabilkan vitamin C dalam formulasi (efek sinergis)",
            "Melembabkan dan memperbaiki skin barrier",
            "Membantu penyembuhan luka dan bekas jerawat",
            "Melindungi dari kerusakan UV (bukan pengganti sunscreen)",
            "Mengurangi tanda penuaan dengan melindungi membran sel",
          ],
          usage: [
            "Dapat digunakan pagi dan malam hari",
            "Cocok dipadukan dengan vitamin C untuk efek sinergis",
            "Aplikasikan setelah serum sebelum pelembab",
            "Bisa digunakan sebagai spot treatment untuk area kering",
            "Formulasi minyak cocok untuk kulit sangat kering",
            "Untuk wajah, pilih konsentrasi 1-5%",
          ],
          warnings: [
            "Hindari formulasi berat untuk kulit berminyak/berjerawat",
            "Beberapa orang mungkin alergi terhadap tocopherol/tocotrienol",
            "Vitamin E murni mungkin terlalu berat untuk wajah",
            "Hindari penggunaan dengan retinol jika kulit sensitif",
            "Pilih alpha-tocopherol untuk stabilitas terbaik",
            "Simpan di tempat sejuk dan gelap",
          ],
          tips: "Cari produk dengan kombinasi vitamin E (tocopherol) dan vitamin C untuk stabilitas dan efektivitas maksimal. Tocotrienols lebih poten tetapi kurang stabil.",
        },
        "Ferulic Acid": {
          benefits: [
            "Menstabilkan vitamin C dan E dalam formulasi",
            "Meningkatkan efektivitas antioksidan hingga 8x",
            "Melindungi dari kerusakan UV dan polusi",
            "Mencerahkan kulit secara tidak langsung",
            "Anti-inflamasi ringan",
            "Mencegah degradasi kolagen",
          ],
          usage: [
            "Biasanya sudah diformulasikan dengan vitamin C+E",
            "Gunakan di pagi hari untuk perlindungan antioksidan",
            "Aplikasikan setelah cleansing pada kulit bersih",
            "Bisa digunakan sebelum atau dicampur dengan sunscreen",
            "Formulasi serum paling efektif",
            "Konsentrasi optimal 0.5-1%",
          ],
          warnings: [
            "Hindari formulasi dengan alkohol tinggi",
            "Mungkin menyebabkan stinging pada kulit sangat sensitif",
            "Simpan di tempat sejuk dan gelap untuk stabilitas",
            "Perhatikan perubahan warna produk",
            "Hindari penggunaan dengan niacinamide dalam formula yang sama",
          ],
          tips: "Produk dengan 0.5% ferulic acid sudah efektif sebagai stabilizer vitamin C. Cari kombinasi vitamin C 15% + vitamin E 1% + ferulic acid 0.5% untuk 'gold standard' antioksidan.",
        },
        Niacin: {
          benefits: [
            "Bentuk aktif niacinamide, lebih cepat diserap kulit",
            "Meningkatkan produksi ceramide hingga 3x",
            "Mengurangi kemerahan rosacea",
            "Meningkatkan sirkulasi darah kulit",
            "Memperbaiki skin barrier lebih cepat dari niacinamide",
            "Anti-inflamasi kuat untuk jerawat meradang",
          ],
          usage: [
            "Mulai dengan konsentrasi sangat rendah (0.1-0.5%)",
            "Gunakan maksimal 2-3x seminggu untuk pemula",
            "Aplikasikan pada kulit bersih sebelum pelembab",
            "Bisa digunakan sebagai spot treatment untuk kemerahan",
            "Gabungkan dengan ceramide untuk perbaikan barrier",
            "Hanya untuk malam hari karena risiko flushing",
          ],
          warnings: [
            "Risiko flushing (kemerahan, panas) cukup tinggi",
            "Hindari jika memiliki rosacea berat",
            "Tidak untuk kulit sangat sensitif",
            "Mulai dengan konsentrasi sangat rendah",
            "Hentikan penggunaan jika iritasi berat",
            "Jangan digunakan bersamaan dengan vitamin C",
          ],
          tips: "Untuk mengurangi flushing, bisa diaplikasikan setelah pelembab (buffering) atau dicampur dengan serum lain. Flushing biasanya hilang dalam 30-60 menit.",
        },
        "Kojic Acid": {
          benefits: [
            "Menghambat produksi melanin (inhibitor tirosinase)",
            "Mencerahkan noda hitam dan hiperpigmentasi",
            "Alternatif hydroquinone yang lebih aman",
            "Memiliki sifat antibakteri ringan",
            "Antioksidan untuk melawan radikal bebas",
            "Mengurangi produksi melanin berlebih pasca inflamasi",
          ],
          usage: [
            "Dapat digunakan pagi dan malam hari",
            "Konsentrasi 1-2% untuk perawatan rumahan",
            "Aplikasikan pada area hiperpigmentasi",
            "Bisa digunakan bersamaan dengan vitamin C",
            "Gabungkan dengan sunscreen untuk hasil maksimal",
            "Hasil terlihat setelah 8-12 minggu",
          ],
          warnings: [
            "Mungkin menyebabkan iritasi pada kulit sensitif",
            "Hindari penggunaan dengan AHA/BHA bersamaan",
            "Uji patch test sebelum penggunaan pertama",
            "Simpan di tempat sejuk dan gelap (mudah teroksidasi)",
            "Hentikan penggunaan jika terjadi kemerahan berlebihan",
          ],
          tips: "Kojic acid diphosphate lebih stabil dan kurang iritatif dibanding kojic acid murni. Cari produk dengan kombinasi kojic acid + arbutin untuk efek pencerahan ganda.",
        },
        AHA: {
          benefits: [
            "Mengangkat sel kulit mati di permukaan (eksfoliasi kimia)",
            "Mencerahkan kulit kusam dan tidak merata",
            "Mengurangi garis halus dan kerutan superfisial",
            "Membantu menyamarkan pori-pori besar",
            "Meningkatkan penyerapan produk perawatan kulit lain",
            "Merangsang produksi kolagen baru",
          ],
          usage: [
            "Mulai dengan konsentrasi rendah (5-10% glycolic/lactic acid)",
            "Gunakan 2-3x seminggu di malam hari",
            "Tingkatkan frekuensi secara bertahap sesuai toleransi kulit",
            "Aplikasikan pada kulit bersih dan kering",
            "Selalu gunakan sunscreen keesokan harinya (SPF 30+)",
            "Untuk pemula, pilih lactic acid yang lebih lembut",
          ],
          warnings: [
            "Hindari penggunaan dengan retinol/vitamin C dalam rutin yang sama",
            "Mungkin menyebabkan purging (jerawat sementara) di awal",
            "Hindari jika kulit sedang sangat sensitif atau teriritasi",
            "Jangan digunakan bersamaan dengan alat eksfoliasi fisik",
            "Wajib pakai sunscreen karena meningkatkan fotosensitivitas",
            "Hentikan penggunaan 1 minggu sebelum prosedur kecantikan",
          ],
          tips: "Glycolic acid (molekul terkecil) paling kuat untuk eksfoliasi, lactic acid lebih lembut dan melembabkan, mandelic acid (molekul besar) cocok untuk kulit sensitif.",
        },
        BHA: {
          benefits: [
            "Menembus dan membersihkan pori-pori tersumbat (larut dalam minyak)",
            "Mengurangi produksi minyak berlebih dengan regulasi sebum",
            "Membunuh bakteri P.acnes penyebab jerawat",
            "Mengatasi komedo hitam dan putih secara efektif",
            "Anti-inflamasi untuk jerawat meradang",
            "Mengurangi ukuran pori-pori yang membesar",
          ],
          usage: [
            "Mulai dengan konsentrasi 1-2% salicylic acid",
            "Gunakan 1-2x seminggu untuk pemula, maksimal 3-4x",
            "Aplikasikan pada area berminyak/berjerawat",
            "Biarkan 20 menit sebelum aplikasi produk berikutnya",
            "Bisa digunakan sebagai masker spot treatment 5-10 menit",
            "Untuk kulit sensitif, pilih betaine salicylate yang lebih lembut",
          ],
          warnings: [
            "Hindari penggunaan dengan AHA/PHA bersamaan jika kulit sensitif",
            "Mungkin menyebabkan kulit kering dan mengelupas",
            "Hindari area mata dan lipatan hidung",
            "Jangan digunakan bersamaan dengan retinol kuat",
            "Wajib pakai sunscreen keesokan harinya",
            "Hentikan jika terjadi iritasi berat",
          ],
          tips: "Salicylic acid bekerja optimal pada pH 3-4. Pilih produk dengan pH tepat dan formula bebas alkohol untuk kulit sensitif.",
        },
        PHA: {
          benefits: [
            "Eksfoliasi lembut tanpa iritasi (molekul lebih besar dari AHA)",
            "Melembabkan sambil mengeksfoliasi (sifat humektan)",
            "Cocok untuk kulit sensitif dan rosacea",
            "Membantu memperkuat skin barrier dengan meningkatkan ceramide",
            "Antioksidan tambahan untuk perlindungan kulit",
            "Tidak menyebabkan fotosensitivitas signifikan",
          ],
          usage: [
            "Dapat digunakan lebih sering (3-4x seminggu) dibanding AHA/BHA",
            "Cocok untuk penggunaan pagi hari karena risiko fotosensitivitas rendah",
            "Bisa digunakan bersamaan dengan bahan aktif lain",
            "Aplikasikan pada kulit bersih sebelum serum",
            "Tetap gunakan sunscreen meski risiko fotosensitivitas rendah",
            "Untuk kulit sangat sensitif, mulai dengan 1-2x seminggu",
          ],
          warnings: [
            "Hindari jika memiliki alergi terhadap bahan turunan tertentu",
            "Hasil mungkin lebih lambat terlihat dibanding AHA/BHA",
            "Tetap mungkin menyebabkan iritasi pada kulit sangat sensitif",
            "Hindari penggunaan dengan retinol kuat jika kulit sensitif",
            "Pilih formula tanpa alkohol dan pewangi",
          ],
          tips: "Gluconolactone adalah PHA paling umum yang cocok untuk pemula. Lactobionic acid memberikan manfaat antioksidan tambahan.",
        },
        "AHA/BHA/PHA": {
          benefits: [
            "Mengangkat sel kulit mati secara menyeluruh (permukaan & pori)",
            "Mencerahkan kulit kusam & meratakan warna kulit",
            "Mengurangi komedo, jerawat, minyak berlebihan",
            "Memperbaiki tekstur kulit kasar, menyamarkan pori-pori besar",
            "Mengurangi garis halus & kerutan kening",
            "Meningkatkan penyerapan skincare lain",
            "Melembapkan & memperkuat skin barrier",
            "Merangsang regenerasi & produksi kolagen",
          ],
          usage: [
            "Mulai dengan produk berkonsentrasi rendah (AHA 5–10%, BHA 0.5–2%, PHA 3–5%)",
            "Gunakan 2–3× seminggu di malam hari",
            "Aplikasikan pada kulit bersih & kering",
            "Untuk kulit sensitif, pilih produk dengan PHA atau mandelic acid",
            "Tingkatkan frekuensi pemakaian secara perlahan sesuai toleransi kulit",
            "Selalu gunakan sunscreen SPF 30+ di siang hari",
            "Gunakan pelembap untuk menjaga hidrasi kulit",
          ],
          warnings: [
            "Hindari penggunaan bersama retinol, vitamin C, benzoyl peroxide di rutinitas yang sama",
            "Awal pemakaian mungkin memunculkan purging (jerawat sementara)",
            "Jangan digunakan saat kulit sangat iritasi, kering, atau terluka",
            "Jangan digabung dengan eksfoliasi fisik (scrub, brush)",
            "Wajib sunscreen karena meningkatkan fotosensitivitas",
            "Hentikan pemakaian 1 minggu sebelum prosedur kecantikan (misal: laser, peeling medis)",
          ],
          tips: [
            "Tes dulu di area kecil kulit (patch test, Mulai dari salah satu (AHA atau BHA) sebelum pakai kombinasi, Perhatikan reaksi kulit, jika muncul iritasi → kurangi frekuensi atau hentikan sementara",
          ],
        },
        Niacinamide: {
          benefits: [
            "Mengurangi produksi minyak berlebih hingga 30%",
            "Memperbaiki skin barrier dengan meningkatkan ceramide",
            "Mencerahkan noda hitam dan hiperpigmentasi",
            "Mengurangi kemerahan dan iritasi (baik untuk rosacea)",
            "Melindungi dari polusi dan stres lingkungan",
            "Mengurangi pori-pori yang membesar",
          ],
          usage: [
            "Dapat digunakan pagi dan malam hari",
            "Konsentrasi 5-10% paling efektif dengan risiko iritasi minimal",
            "Aplikasikan setelah serum vitamin C (dengan jeda waktu 30 menit)",
            "Cocok dipadukan dengan hampir semua bahan aktif",
            "Bisa digunakan di area mata yang sensitif",
            "Untuk jerawat, gabungkan dengan zinc",
          ],
          warnings: [
            "Hindari formulasi dengan zinc tinggi jika kulit kering",
            "Beberapa orang mungkin mengalami flushing (kemerahan sementara)",
            "Hindari penggunaan langsung dengan vitamin C (beri jeda 30 menit)",
            "Pilih formula tanpa alkohol untuk kulit sensitif",
            "Konsentrasi di atas 10% mungkin menyebabkan iritasi",
          ],
          tips: "Niacinamide 5% sudah efektif untuk kebanyakan orang tanpa risiko iritasi. Untuk jerawat, cari kombinasi niacinamide + zinc PCA.",
        },
        Retinoids: {
          benefits: [
            "Meningkatkan pergantian sel kulit (cell turnover)",
            "Merangsang produksi kolagen dan elastin",
            "Mengurangi garis halus dan kerutan hingga 40% dalam 12 minggu",
            "Membantu mengatasi jerawat dan komedo",
            "Meratakan warna dan tekstur kulit",
            "Meningkatkan ketebalan epidermis",
          ],
          usage: [
            "Mulai dengan konsentrasi rendah (0.01-0.025% retinol)",
            "Gunakan hanya di malam hari (terdegradasi oleh sinar matahari)",
            "Aplikasikan setelah moisturizer untuk mengurangi iritasi (buffering)",
            "Mulai 1-2x seminggu, tingkatkan secara bertahap",
            "Selalu gunakan sunscreen di pagi hari (SPF 30+)",
            "Butuh 8-12 minggu untuk melihat hasil",
            "Untuk pemula, pilih retinaldehyde atau granactive retinoid",
          ],
          warnings: [
            "Hindari penggunaan dengan AHA/BHA/vitamin C",
            "Jangan digunakan saat hamil/menyusui (risiko teratogenik)",
            "Mungkin menyebabkan purging (jerawat sementara) di awal",
            "Hindari area mata dan lipatan hidung",
            "Wajib pakai sunscreen karena meningkatkan sensitivitas matahari",
            "Hentikan penggunaan 1 minggu sebelum prosedur kecantikan",
          ],
          tips: "Untuk pemula, mulai dengan Retinaldehyde (lebih kuat dari retinol tapi lebih lembut dari tretinoin) atau Granactive Retinoid (hydroxypinacolone retinoate) yang lebih stabil dan kurang iritatif.",
        },
        Peptides: {
          benefits: [
            "Merangsang produksi kolagen (signal peptides seperti Matrixyl)",
            "Mengurangi garis halus dan kerutan hingga 30% dalam 8 minggu",
            "Memperbaiki elastisitas dan kekencangan kulit",
            "Membantu penyembuhan kulit dan perbaikan jaringan",
            "Menguatkan skin barrier dengan meningkatkan sintesis protein",
            "Beberapa peptide memiliki efek mirip Botox (seperti Argireline)",
          ],
          usage: [
            "Dapat digunakan pagi dan malam hari",
            "Aplikasikan setelah bahan aktif seperti vitamin C/AHA",
            "Cocok dipadukan dengan hampir semua bahan skincare",
            "Bisa digunakan di area mata yang sensitif",
            "Hasil optimal setelah 8-12 minggu penggunaan konsisten",
            "Untuk anti-aging, gabungkan dengan retinoid",
          ],
          warnings: [
            "Hindari formulasi dengan alkohol tinggi yang bisa mengeringkan",
            "Beberapa peptide mungkin tidak stabil dengan bahan tertentu",
            "Perhatikan urutan aplikasi untuk penyerapan optimal",
            "Efek tidak secepat retinoid tetapi lebih aman untuk kulit sensitif",
            "Pilih produk dengan kombinasi beberapa peptide untuk hasil terbaik",
          ],
          tips: "Matrixyl 3000 (palmitoyl tetrapeptide-7) dan Argireline (acetyl hexapeptide-8) adalah peptide dengan penelitian klinis paling kuat. Copper peptides (GHK-Cu) bagus untuk penyembuhan luka.",
        },
        "Azelaic Acid": {
          benefits: [
            "Mengurangi peradangan jerawat (anti-inflamasi)",
            "Mencerahkan hiperpigmentasi pasca jerawat",
            "Mengatasi rosacea dan kemerahan",
            "Antibakteri ringan untuk P.acnes",
            "Efek eksfoliasi lembut",
            "Menghambat produksi melanin berlebih",
          ],
          usage: [
            "Dapat digunakan pagi dan malam hari",
            "Mulai dengan konsentrasi 10%, bisa naik ke 15-20%",
            "Aplikasikan pada kulit bersih dan kering",
            "Bisa digunakan sebagai spot treatment atau seluruh wajah",
            "Cocok dipadukan dengan niacinamide",
            "Untuk rosacea, gunakan rutin 2x sehari",
          ],
          warnings: [
            "Mungkin menyebabkan gatal atau stinging sementara",
            "Hindari jika mengalami iritasi berat",
            "Mulai dengan aplikasi selang-seling hari jika kulit sensitif",
            "Gunakan sunscreen karena bisa meningkatkan fotosensitivitas",
            "Hindari penggunaan dengan bahan iritatif lain",
            "Konsentrasi di atas 15% biasanya memerlukan resep",
          ],
          tips: "Azelaic acid 15-20% membutuhkan resep dokter di beberapa negara. Sangat baik untuk jerawat + hiperpigmentasi sekaligus.",
        },
        Hydroquinone: {
          benefits: [
            "Menghambat produksi melanin efektif (inhibitor tirosinase kuat)",
            "Mengatasi melasma dan hiperpigmentasi dalam",
            "Hasil lebih cepat (4-8 minggu) dibanding bahan pencerah lain",
            "Bekerja pada semua lapisan kulit (epidermis dan dermis)",
            "Efek maksimal pada penggunaan 3-4 bulan",
            "Standar emas untuk pencerahan kulit di dermatologi",
          ],
          usage: [
            "Hanya digunakan di malam hari (terdegradasi oleh sinar matahari)",
            "Mulai dengan konsentrasi 2-4% (resep dokter untuk >4%)",
            "Aplikasikan hanya pada area hiperpigmentasi",
            "Gunakan maksimal 5 malam seminggu",
            "Selalu gunakan sunscreen pagi hari (SPF 50+)",
            "Harus dibawah pengawasan dokter",
            "Cycling therapy (3 bulan on, 3 bulan off)",
          ],
          warnings: [
            "Tidak untuk penggunaan jangka panjang (>5 bulan risiko ochronosis)",
            "Mungkin menyebabkan iritasi dan kemerahan",
            "Risiko hiperpigmentasi kebalikan (ochronosis) jika berlebihan",
            "Hindari area mata dan membran mukosa",
            "Jangan digunakan saat hamil/menyusui",
            "Hindari penggunaan dengan bahan iritatif lain",
          ],
          tips: "Cycling therapy (3 bulan on, 3 bulan off) lebih aman untuk penggunaan jangka panjang. Gabungkan dengan retinoid malam hari (dengan jeda waktu) untuk meningkatkan penetrasi.",
        },
        "Hyaluronic Acid (Synthetic)": {
          benefits: [
            "Mengikat air hingga 1000x berat molekulnya",
            "Menghidrasi semua lapisan kulit dengan berat molekul berbeda",
            "Mengisi kerutan halus sementara dengan efek plumping",
            "Memperbaiki skin barrier yang rusak",
            "Cocok untuk semua jenis kulit termasuk sensitif",
            "Meningkatkan penyerapan bahan aktif lain",
          ],
          usage: [
            "Oleskan pada kulit yang masih lembab setelah cleansing",
            "Gunakan sebelum pelembab untuk mengunci hidrasi",
            "Bisa digunakan pagi dan malam hari",
            "Untuk hasil maksimal, gunakan dengan air termisterisasi",
            "Layer dengan pelembab occlusive di iklim kering",
            "Pilih produk dengan kombinasi low-medium-high molecular weight",
          ],
          warnings: [
            "Hindari di iklim sangat kering tanpa pelembab tambahan",
            "Beberapa formula mungkin mengandung alkohol yang mengeringkan",
            "Jangan gunakan sebagai satu-satunya pelembab untuk kulit sangat kering",
            "Hindari formulasi dengan banyak pewangi untuk kulit sensitif",
            "Simpan di tempat sejuk untuk mencegah degradasi",
          ],
          tips: "Pilih produk dengan berat molekul berbeda: low (50kDa) untuk penetrasi dalam, medium (130kDa) untuk lapisan tengah, high (2000kDa) untuk permukaan kulit.",
        },
        "Alpha Arbutin": {
          benefits: [
            "Pencerah kulit alami (turunan hydroquinone dari tanaman)",
            "Menghambat produksi melanin secara bertahap",
            "Aman untuk penggunaan jangka panjang",
            "Mengurangi hiperpigmentasi pasca inflamasi",
            "Efek samping minimal dibanding bahan pencerah lain",
            "Cocok untuk semua jenis kulit termasuk sensitif",
          ],
          usage: [
            "Dapat digunakan pagi dan malam hari",
            "Konsentrasi 2-5% untuk perawatan rumahan",
            "Aplikasikan pada area hiperpigmentasi",
            "Bisa digunakan bersamaan dengan vitamin C",
            "Gabungkan dengan sunscreen untuk hasil maksimal",
            "Hasil terlihat setelah 8-12 minggu",
          ],
          warnings: [
            "Mungkin menyebabkan iritasi ringan pada kulit sangat sensitif",
            "Hindari penggunaan dengan bahan iritatif lain",
            "Uji patch test sebelum penggunaan pertama",
            "Alpha-arbutin lebih stabil dari beta-arbutin",
            "Hindari produk dengan arbutin yang sudah teroksidasi (warna coklat)",
          ],
          tips: "Alpha-arbutin 2x lebih efektif dari beta-arbutin dengan risiko iritasi lebih rendah. Cari produk dengan deoxyarbutin untuk penetrasi lebih baik.",
        },
        "Tranexamic Acid": {
          benefits: [
            "Mengatasi melasma dan hiperpigmentasi pasca inflamasi",
            "Bekerja pada jalur inflamasi penyebab hiperpigmentasi",
            "Mengurangi produksi melanosit yang terlalu aktif",
            "Alternatif hydroquinone yang lebih aman untuk jangka panjang",
            "Mengurangi kemerahan rosacea",
            "Efek samping minimal dibanding bahan pencerah lain",
          ],
          usage: [
            "Dapat digunakan pagi dan malam hari",
            "Konsentrasi 2-5% untuk perawatan rumahan",
            "Aplikasikan pada area hiperpigmentasi",
            "Bisa digunakan bersamaan dengan niacinamide",
            "Gabungkan dengan sunscreen untuk mencegah melasma",
            "Hasil terlihat setelah 8-12 minggu",
          ],
          warnings: [
            "Hindari jika alergi terhadap tranexamic acid",
            "Uji patch test sebelum penggunaan pertama",
            "Mungkin menyebabkan iritasi ringan di awal",
            "Hindari penggunaan dengan bahan iritatif lain",
            "Tetap gunakan sunscreen untuk mencegah hiperpigmentasi kembali",
          ],
          tips: "Untuk melasma, cari produk dengan kombinasi tranexamic acid + niacinamide + kojic acid untuk pendekatan multi-target.",
        },
        "Zinc PCA": {
          benefits: [
            "Mengontrol produksi minyak berlebih (seboregulator)",
            "Mengurangi peradangan jerawat",
            "Menyerap kelebihan minak di permukaan kulit",
            "Membantu menenangkan kulit iritasi",
            "Mempercepat penyembuhan luka jerawat",
            "Mengurangi pertumbuhan bakteri P.acnes",
          ],
          usage: [
            "Dapat digunakan pagi dan malam hari",
            "Konsentrasi 1-2% dalam formulasi produk",
            "Aplikasikan pada area berminyak/berjerawat",
            "Bisa digunakan sebagai toner atau serum",
            "Gabungkan dengan niacinamide untuk kontrol minyak maksimal",
            "Untuk kulit sangat berminyak, bisa digunakan 2x sehari",
          ],
          warnings: [
            "Mungkin menyebabkan kulit kering jika berlebihan",
            "Hindari penggunaan dengan copper peptide",
            "Uji patch test sebelum penggunaan pertama",
            "Pilih formula tanpa alkohol untuk kulit sensitif",
            "Hentikan penggunaan jika terjadi iritasi",
          ],
          tips: "Zinc PCA lebih efektif dari zinc oxide untuk kontrol minyak. Cari produk dengan kombinasi zinc PCA + niacinamide untuk jerawat dan kulit berminyak.",
        },
        "Benzoyl Peroxide": {
          benefits: [
            "Membunuh bakteri P.acnes penyebab jerawat (antibakteri)",
            "Mengurangi peradangan jerawat",
            "Membantu mengeringkan jerawat aktif",
            "Mencegah jerawat baru muncul",
            "Efek peeling ringan untuk sel kulit mati",
            "Mengurangi komedo hitam dan putih",
          ],
          usage: [
            "Mulai dengan konsentrasi 2.5% (sama efektif dengan 10% tapi lebih lembut)",
            "Gunakan sebagai spot treatment atau lapisan tipis di area rawan jerawat",
            "Aplikasikan setelah cleansing pada kulit kering",
            "Mulai dengan 1-2x seminggu, tingkatkan secara bertahap",
            "Selalu gunakan sunscreen pagi hari (meningkatkan fotosensitivitas)",
            "Short contact therapy (5-10 menit lalu bilas) untuk kulit sensitif",
          ],
          warnings: [
            "Mungkin menyebabkan kulit kering dan mengelupas",
            "Hindari penggunaan dengan retinol/retinoid (iritasi berlebihan)",
            "Dapat memutihkan pakaian dan sprei (oksidasi)",
            "Hindari area mata dan bibir",
            "Lakukan patch test sebelum penggunaan pertama",
            "Hentikan jika terjadi iritasi berat",
          ],
          tips: "Short contact therapy (biarkan 5-10 menit lalu bilas) mengurangi iritasi tapi tetap efektif. Untuk jerawat parah, bisa dikombinasi dengan klindamisin.",
        },
        Sulfur: {
          benefits: [
            "Memiliki sifat antibakteri, anti-inflamasi, dan keratolitik (membantu pengelupasan sel kulit mati).",
            "Efektif untuk jerawat ringan hingga sedang, terutama yang bersifat inflamasi dan fungal acne.",
            "Membantu mengeringkan jerawat dan mengurangi kemerahan.",
            "Sering digunakan untuk rosacea dan dermatitis seboroik.",
          ],
          usage: [
            "Biasanya dalam bentuk sabun cuci muka, masker, salep, atau spot treatment.",
            "Konsentrasi bervariasi.",
          ],
          warnings: [
            "Memiliki bau khas yang mungkin tidak disukai sebagian orang.",
            "Dapat menyebabkan kekeringan pada kulit jika digunakan berlebihan.",
          ],
          tips: "Pilihan yang lebih lembut dibandingkan Benzoyl Peroxide untuk beberapa orang dengan kulit sensitif. Masker sulfur bisa efektif untuk mengontrol minyak dan jerawat jika digunakan 1-2 kali seminggu.",
        },
        "Hyaluronic Acid (Natural)": {
          benefits: [
            "Mengikat molekul air hingga 1000x berat molekulnya",
            "Memberikan hidrasi instan pada semua lapisan kulit",
            "Mengisi kerutan halus sementara dengan efek plumping",
            "Membantu memperbaiki skin barrier yang rusak",
            "Cocok untuk semua jenis kulit termasuk sensitif",
            "Meningkatkan penyerapan bahan aktif lain",
          ],
          usage: [
            "Oleskan pada kulit yang masih lembab setelah cleansing",
            "Gunakan sebelum pelembab untuk mengunci hidrasi",
            "Bisa digunakan pagi dan malam hari",
            "Untuk hasil maksimal, gunakan dengan air termisterisasi",
            "Layer dengan pelembab occlusive di iklim kering",
            "Bisa diaplikasikan dalam 3 lapis untuk kulit sangat kering",
          ],
          warnings: [
            "Hindari di iklim sangat kering tanpa pelembab tambahan (bisa menarik air dari kulit)",
            "Beberapa formula mungkin mengandung alkohol yang mengeringkan",
            "Jangan gunakan sebagai satu-satunya pelembab untuk kulit sangat kering",
            "Simpan di tempat sejuk untuk mencegah degradasi",
          ],
          tips: "Pilih produk dengan berat molekul berbeda (low 50kDa, medium 130kDa, high 2000kDa) untuk penetrasi optimal di semua lapisan kulit.",
        },
        "Aloe Vera": {
          benefits: [
            "Mendinginkan kulit terbakar matahari (efek setara dengan hidrokortison 1%)",
            "Melembabkan tanpa rasa berminyak (kandungan air 99%)",
            "Mengurangi kemerahan dan iritasi hingga 60%",
            "Mengandung 75+ senyawa aktif termasuk antioksidan",
            "Mempercepat penyembuhan luka kecil dan lecet",
            "Mengurangi efek samping perawatan jerawat",
          ],
          usage: [
            "Dapat digunakan kapan saja saat kulit teriritasi",
            "Oleskan gel segar langsung dari tanaman jika memungkinkan",
            "Simpan di kulkas untuk efek mendinginkan ekstra",
            "Bisa digunakan sebagai masker wajah 15-20 menit",
            "Cocok sebagai after-shave treatment",
            "Untuk kulit terbakar, aplikasikan setiap 2 jam",
          ],
          warnings: [
            "Hindari produk dengan alkohol tinggi atau pewangi berlebihan",
            "Beberapa orang mungkin alergi terhadap aloin (komponen aloe)",
            "Jangan gunakan pada luka terbuka yang dalam",
            "Pilih gel murni tanpa pewarna/parfum untuk kulit sensitif",
            "Efek optimal dari gel segar bukan ekstrak",
          ],
          tips: "Pilih gel aloe vera 95-100% murni dengan lidah buaya sebagai bahan pertama, bukan air.",
        },
        "Tea Tree Oil": {
          benefits: [
            "Antibakteri alami efektif melawan P.acnes (penyebab jerawat)",
            "Mengurangi peradangan jerawat hingga 40%",
            "Mengontrol produksi minyak berlebih",
            "Membantu menyembuhkan luka kecil dan lecet",
            "Alternatif alami untuk benzoyl peroxide",
            "Mengurangi ukuran pori-pori yang membesar",
          ],
          usage: [
            "Selalu encerkan dengan carrier oil (1-2 tetes per sendok minyak jojoba/zaitun)",
            "Gunakan sebagai spot treatment pada jerawat dengan cotton bud",
            "Bisa dicampur dengan clay mask (1 tetes per masker)",
            "Gunakan malam hari untuk menghindari fotosensitivitas",
            "Bisa ditambahkan ke toner (1 tetes per 30ml)",
            "Untuk jerawat kepala, tambahkan 2-3 tetes ke shampoo",
          ],
          warnings: [
            "Jangan digunakan langsung tanpa pengenceran (risiko iritasi tinggi)",
            "Hindari area mata dan membran mukosa",
            "Mungkin menyebabkan kulit kering jika berlebihan",
            "Lakukan patch test 24 jam sebelum penggunaan pertama",
            "Hindari jika memiliki alergi terhadap tanaman Melaleuca",
            "Jangan digunakan bersamaan dengan retinol",
          ],
          tips: "Campur dengan aloe vera gel (1 tetes tea tree + 1 sendok aloe vera) untuk formula jerawat yang lebih lembut.",
        },
        Panthenol: {
          benefits: [
            "Provitamin B5, diubah menjadi asam pantotenat di kulit.",
            "Sangat baik untuk melembapkan, menenangkan, dan meredakan iritasi.",
            "Membantu mempercepat proses penyembuhan luka dan memperbaiki skin barrier.",
            "Mengurangi gatal dan kemerahan.",
          ],
          usage: [
            "Sering ditemukan dalam toner, serum, pelembap, dan produk after-sun.",
            "Cocok untuk semua jenis kulit, terutama kulit kering, sensitif, atau teriritasi.",
          ],
          warnings: [
            "Sangat aman dan dapat ditoleransi dengan baik, jarang menyebabkan reaksi negatif.",
          ],
          tips: "Bahan yang sangat baik untuk digunakan setelah prosedur eksfoliasi, penggunaan retinoid, atau saat kulit terasa 'stres'.",
        },
        Ceramides: {
          benefits: [
            "Memperbaiki skin barrier yang rusak (50% komposisi barrier)",
            "Mengurangi kehilangan air transepidermal (TEWL)",
            "Menenangkan kulit sensitif dan iritasi",
            "Melindungi dari polutan dan iritan lingkungan",
            "Membantu pemulihan setelah perawatan aktif (retinoid, AHA)",
            "Mengurangi sensitivitas kulit",
          ],
          usage: [
            "Dapat digunakan pagi dan malam hari",
            "Aplikasikan setelah bahan aktif seperti retinol/AHA",
            "Cocok sebagai pelembab akhir untuk mengunci hidrasi",
            "Bisa digunakan di area mata yang sensitif",
            "Formulasi krim lebih efektif daripada serum",
            "Gabungkan dengan kolesterol dan asam lemak bebas",
          ],
          warnings: [
            "Hindari formulasi dengan wewangian kuat untuk kulit sensitif",
            "Perhatikan bahan tambahan yang mungkin menyebabkan iritasi",
            "Pilih produk dengan kombinasi ceramide 1, 3, 6-II",
            "Efek optimal pada rasio ceramide:kolesterol:asam lemak 1:1:1",
            "Hindari penggunaan dengan bahan yang merusak skin barrier",
          ],
          tips: "Cari produk dengan rasio ceramide:cholesterol:asam lemak bebas 1:1:1 untuk meniru komposisi skin barrier alami. Ceramide NP, AP, EOP paling penting.",
        },
        "Beta-Glucan": {
          benefits: [
            "Polisakarida yang berasal dari jamur, gandum, atau ragi.",
            "Humektan yang sangat poten, diklaim mampu menarik air lebih baik dari Hyaluronic Acid oleh beberapa penelitian.",
            "Memiliki sifat antioksidan dan anti-inflamasi, membantu menenangkan kulit dan mengurangi kemerahan.",
            "Membantu mempercepat penyembuhan luka dan merangsang produksi kolagen.",
          ],
          usage: [
            "Ditemukan dalam serum, essence, atau pelembap.",
            "Cocok untuk semua jenis kulit, terutama kulit kering, dehidrasi, dan sensitif.",
          ],
          warnings: ["Sangat aman dan dapat ditoleransi dengan baik."],
          tips: "Alternatif atau pelengkap yang sangat baik untuk Hyaluronic Acid jika Anda mencari hidrasi intens dan manfaat menenangkan tambahan.",
        },
        Glycerin: {
          benefits: [
            "Humektan dasar yang sangat umum dan teruji efektivitasnya.",
            "Menarik kelembapan dari udara ke lapisan atas kulit.",
            "Membantu menjaga hidrasi kulit dan fungsi skin barrier.",
          ],
          usage: [
            "Merupakan bahan dasar yang sangat umum ditemukan di hampir semua jenis produk skincare, mulai dari pembersih hingga pelembap dan serum.",
          ],
          warnings: ["Sangat aman dan non-iritan untuk sebagian besar orang."],
          tips: "Meskipun 'dasar', glycerin adalah pelembap yang sangat andal dan penting untuk kesehatan kulit.",
        },
        Bakuchiol: {
          benefits: [
            "Alternatif retinol alami yang berasal dari tanaman Psoralea corylifolia.",
            "Memiliki sifat antioksidan, anti-inflamasi, dan antibakteri.",
            "Merangsang produksi kolagen dan pergantian sel kulit, mirip dengan retinol namun dengan potensi iritasi yang lebih rendah.",
            "Membantu mengurangi garis halus, kerutan, dan hiperpigmentasi.",
          ],
          usage: [
            "Dapat digunakan pagi dan/atau malam hari.",
            "Konsentrasi umum dalam produk adalah 0.5% hingga 2%.",
            "Sering dianggap lebih lembut dan cocok untuk kulit sensitif atau mereka yang tidak dapat mentolerir retinoid.",
          ],
          warnings: [
            "Meskipun umumnya lebih lembut dari retinol, patch test tetap dianjurkan, terutama jika memiliki kulit sangat sensitif.",
            "Belum ada data keamanan jangka panjang sebanyak retinol, terutama untuk ibu hamil/menyusui (konsultasi dokter).",
          ],
          tips: "Pilihan yang baik jika Anda mencari manfaat mirip retinol tanpa efek samping yang sering diasosiasikan dengan retinoid. Bisa dikombinasikan dengan bahan aktif lain.",
        },
        "Ekstrak Licorice": {
          benefits: [
            "Menghambat produksi melanin berlebih dengan menghambat tirosinase",
            "Mencerahkan noda hitam dan hiperpigmentasi pasca inflamasi",
            "Mengurangi kemerahan dan iritasi (40% lebih efektif daripada hidrokortison 1%)",
            "Efek anti-inflamasi untuk jerawat dan rosacea",
            "Melindungi dari kerusakan UV (bukan pengganti sunscreen)",
            "Meningkatkan efektivitas vitamin C",
          ],
          usage: [
            "Dapat digunakan pagi dan malam hari",
            "Cocok dipadukan dengan vitamin C untuk hasil cerah maksimal",
            "Aplikasikan pada area hiperpigmentasi dengan konsentrasi 2-5%",
            "Bisa digunakan setelah eksfoliasi untuk mencegah inflamasi",
            "Formulasi serum lebih efektif daripada krim",
            "Gabungkan dengan niacinamide untuk efek sinergis",
          ],
          warnings: [
            "Hindari penggunaan dengan AHA/BHA konsentrasi tinggi secara bersamaan",
            "Beberapa produk mungkin mengandung alkohol yang mengeringkan",
            "Hasil terlihat setelah 4-8 minggu penggunaan konsisten",
            "Uji patch test untuk kulit sensitif",
            "Hindari jika alergi terhadap tanaman Glycyrrhiza",
          ],
          tips: "Cari produk dengan glabridin (komponen aktif utama licorice) minimal 0.5% untuk hasil terbaik.",
        },
        Squalane: {
          benefits: [
            "Emolien ringan yang sangat mirip dengan squalene, komponen alami sebum kulit manusia.",
            "Melembapkan kulit tanpa terasa berat atau menyumbat pori (non-komedogenik untuk sebagian besar orang).",
            "Membantu meningkatkan elastisitas dan kelembutan kulit.",
            "Antioksidan, membantu melindungi kulit dari kerusakan oksidatif.",
          ],
          usage: [
            "Dapat digunakan sebagai face oil (beberapa tetes setelah serum/pelembap) atau sebagai bahan dalam pelembap dan serum.",
            "Cocok untuk semua jenis kulit, termasuk kulit berminyak dan acne-prone karena sifatnya yang ringan.",
          ],
          warnings: [
            "Sangat jarang menyebabkan iritasi. Squalane yang digunakan dalam kosmetik biasanya berasal dari tumbuhan (zaitun, tebu) dan stabil.",
          ],
          tips: "Pilih squalane yang 100% plant-derived. Sangat baik untuk 'mengunci' hidrasi dari produk sebelumnya.",
        },
        "Centella Asiatica": {
          benefits: [
            "Menenangkan kulit yang teriritasi dan sensitif",
            "Mempercepat penyembuhan luka dan bekas jerawat 40% lebih cepat",
            "Mengurangi kemerahan dan peradangan",
            "Meningkatkan produksi kolagen tipe I dan III",
            "Melindungi kulit dari stres oksidatif",
            "Mengurangi tanda stretch mark",
          ],
          usage: [
            "Dapat digunakan pagi dan malam hari",
            "Aplikasikan setelah toner dan sebelum serum",
            "Formulasi serum (10-20% centella) lebih efektif daripada krim",
            "Cocok digunakan setelah perawatan eksfoliasi untuk menenangkan",
            "Bisa digunakan sebagai spot treatment untuk area iritasi",
            "Gabungkan dengan niacinamide untuk efek sinergis",
          ],
          warnings: [
            "Hindari produk dengan alkohol tinggi yang bisa mengurangi manfaat",
            "Uji patch test untuk kulit sangat sensitif",
            "Beberapa produk mungkin mengandung ekstrak lain yang berpotensi iritasi",
            "Efek optimal terlihat setelah 8-12 minggu penggunaan konsisten",
          ],
          tips: "Cari produk dengan minimal 10% Centella Asiatica dan kandungan madecassoside tinggi untuk hasil optimal.",
        },
        "Green Tea Extract": {
          benefits: [
            "Kaya akan polifenol, terutama Epigallocatechin Gallate (EGCG), yang merupakan antioksidan sangat kuat.",
            "Melindungi kulit dari kerusakan akibat radikal bebas dan paparan sinar UV (bukan pengganti sunscreen).",
            "Memiliki sifat anti-inflamasi, membantu menenangkan kulit dan mengurangi kemerahan.",
            "Dapat membantu mengontrol produksi sebum.",
          ],
          usage: [
            "Sering ditemukan dalam serum, toner, pelembap, dan masker.",
            "Baik digunakan pada pagi hari untuk perlindungan antioksidan tambahan di bawah sunscreen.",
          ],
          warnings: [
            "Umumnya aman dan dapat ditoleransi dengan baik oleh sebagian besar jenis kulit.",
          ],
          tips: "Pilihan antioksidan yang baik untuk berbagai jenis kulit, termasuk kulit berminyak dan rentan berjerawat.",
        },
        Allantoin: {
          benefits: [
            "Menenangkan iritasi dan kemerahan pada kulit.",
            "Melembapkan dan membantu mencegah kekeringan.",
            "Mendorong regenerasi sel kulit dan mempercepat penyembuhan luka ringan atau lecet.",
            "Memiliki sifat keratolitik ringan, membantu melunakkan dan mengangkat sel kulit mati.",
          ],
          usage: [
            "Sering ditemukan dalam produk penenang, pelembap, toner, dan produk untuk kulit sensitif atau setelah terpapar matahari.",
          ],
          warnings: [
            "Dianggap sangat aman dan non-iritan, cocok bahkan untuk kulit bayi.",
          ],
          tips: "Bahan yang sangat baik untuk menenangkan kulit yang 'rewel' atau teriritasi akibat penggunaan bahan aktif kuat lainnya.",
        },
        Chamomile: {
          benefits: [
            "Anti-inflamasi alami (bisabolol 50x lebih kuat daripada aspirin)",
            "Mengurangi kemerahan dan iritasi kulit",
            "Menghambat pelepasan histamin (baik untuk kulit alergi)",
            "Mengandung apigenin (antioksidan kuat)",
            "Menenangkan kulit setelah pencukuran/penghilangan bulu",
            "Membantu mengatasi dermatitis kontak",
          ],
          usage: [
            "Dapat digunakan sebagai toner atau kompres",
            "Untuk mata bengkak, gunakan kantong teh chamomile dingin",
            "Formulasi serum lebih terkonsentrasi daripada krim",
            "Bisa ditambahkan ke air mandi untuk kulit iritasi",
            "Untuk kulit sensitif, gunakan produk tanpa alkohol",
            "Gabungkan dengan aloe vera untuk efek menenangkan ganda",
          ],
          warnings: [
            "Hindari jika alergi terhadap tanaman Asteraceae",
            "Uji patch test sebelum penggunaan pertama",
            "Ekstrak chamomile Jerman (Matricaria recutita) lebih efektif daripada Romawi",
            "Hindari penggunaan pada luka terbuka",
            "Teh chamomile untuk minum berbeda dengan ekstrak topikal",
          ],
          tips: "Cari produk dengan kandungan bisabolol minimal 0.5% untuk efek anti-inflamasi optimal.",
        },
        "Willow Bark Extract": {
          benefits: [
            "Sumber alami salisin, yang di dalam kulit diubah menjadi asam salisilat (BHA).",
            "Memberikan efek eksfoliasi yang lebih lembut dibandingkan asam salisilat murni.",
            "Memiliki sifat anti-inflamasi dan antibakteri ringan.",
            "Membantu membersihkan pori-pori dan mengurangi tampilan komedo.",
          ],
          usage: [
            "Sering digunakan sebagai alternatif BHA yang lebih lembut dalam toner, serum, atau pembersih.",
            "Cocok untuk mereka yang baru mencoba eksfoliasi atau memiliki kulit sensitif yang tidak bisa mentolerir BHA murni.",
          ],
          warnings: [
            "Efek eksfoliasinya cenderung lebih ringan dan bertahap dibandingkan asam salisilat murni.",
            "Meskipun alami, tetap ada potensi iritasi jika kulit sangat sensitif.",
          ],
          tips: "Perhatikan konsentrasi ekstrak atau kandungan salisin yang terstandarisasi jika ingin efektivitas yang lebih terukur.",
        },
        "Rosehip Oil": {
          benefits: [
            "Mengandung retinoid alami (trans-retinoic acid) setara 0.1% retinol",
            "Vitamin C alami (asam askorbat) 8x lebih stabil dari sintetik",
            "Mengurangi garis halus dan kerutan dalam 8 minggu",
            "Mencerahkan kulit dan mengurangi hiperpigmentasi",
            "Asam lemak esensial (omega-3,6,9) memperbaiki skin barrier",
            "Membantu menyamarkan bekas luka dan stretch mark",
          ],
          usage: [
            "Dapat digunakan pagi atau malam hari (2-3 tetes)",
            "Oleskan sebagai step terakhir routine malam sebelum pelembab",
            "Bisa dicampur dengan moisturizer untuk aplikasi lebih mudah",
            "Untuk kulit kering, gunakan sebagai occlusive layer",
            "Simpan di tempat sejuk dan gelap (mudah teroksidasi)",
            "Gabungkan dengan vitamin C sintetik untuk efek cerah maksimal",
          ],
          warnings: [
            "Hindari jika memiliki alergi terhadap tanaman Rosaceae",
            "Uji patch test terlebih dahulu untuk kulit sensitif",
            "Kemungkinan clog pores untuk kulit sangat berminyak",
            "Hindari penggunaan dengan retinoid kuat jika kulit sensitif",
            "Mungkin menyebabkan purging ringan di awal penggunaan",
            "Warna minyak harus oranye keemasan (jika kecoklatan artinya teroksidasi)",
          ],
          tips: "Rosehip oil bisa menjadi alternatif alami untuk retinoid bagi yang tidak bisa menggunakan retinoid sintetik. Pilih cold-pressed dan unrefined.",
        },
        Madu: {
          benefits: [
            "Antibakteri alami (efektif melawan MRSA)",
            "Melembabkan sebagai humektan alami",
            "Mengandung enzim glukosa oksidase untuk penyembuhan luka",
            "Kaya antioksidan (ORAC tinggi)",
            "Mengurangi peradangan jerawat",
            "Membantu mengelupas sel kulit mati secara lembut",
          ],
          usage: [
            "Dapat digunakan sebagai masker (15-20 menit)",
            "Madu Manuka grade medikal untuk jerawat meradang",
            "Campur dengan yogurt untuk eksfoliasi lembut",
            "Untuk kulit kering, gabungkan dengan minyak almond",
            "Sebagai pembersih, campur dengan sedikit air hangat",
            "Hindari pemanasan tinggi yang merusak enzim",
          ],
          warnings: [
            "Hindari jika alergi terhadap madu/sengatan lebah",
            "Tidak untuk kulit yang sangat berminyak di iklim lembab",
            "Pilih madu mentah bukan yang sudah diproses",
            "Hindari penggunaan pada luka terbuka besar",
            "Uji patch test untuk kulit sensitif",
            "Bisa menarik semut jika tidak dibersihkan sempurna",
          ],
          tips: "Madu Manuka UMF 10+ ke atas memiliki efek antibakteri paling kuat untuk jerawat.",
        },
        "Ekstrak Biji Anggur": {
          benefits: [
            "Antioksidan kuat (proanthocyanidins 20x vitamin E)",
            "Melindungi dari kerusakan UV dan polusi",
            "Mengencangkan kulit dengan meningkatkan produksi kolagen",
            "Mengurangi kerusakan akibat sinar matahari",
            "Menstabilkan vitamin C dalam formulasi",
            "Mengurangi pembuluh darah kapiler yang pecah",
          ],
          usage: [
            "Dapat digunakan pagi hari sebagai antioksidan",
            "Gabungkan dengan vitamin C untuk efek sinergis",
            "Formulasi serum lebih terkonsentrasi daripada krim",
            "Untuk kulit kendur, gunakan rutin 2x sehari",
            "Bisa digunakan di area mata yang sensitif",
            "Simpan di tempat sejuk dan gelap",
          ],
          warnings: [
            "Hindari jika alergi terhadap anggur",
            "Uji patch test sebelum penggunaan pertama",
            "Beberapa produk mungkin mengandung alkohol sebagai pelarut",
            "Efek optimal pada konsentrasi 1-5%",
            "Hasil terlihat setelah 8-12 minggu",
          ],
          tips: "Cari produk dengan kandungan proanthocyanidins minimal 95% untuk manfaat antioksidan maksimal.",
        },
        Propolis: {
          benefits: [
            "Antibakteri alami efektif melawan S.aureus dan P.acnes",
            "Anti-inflamasi untuk kulit merah dan iritasi (setara dengan kortikosteroid ringan)",
            "Mempercepat penyembuhan luka jerawat 30% lebih cepat",
            "Mengandung 300+ senyawa aktif termasuk antioksidan",
            "Membantu menenangkan eksim dan psoriasis ringan",
            "Meningkatkan produksi kolagen tipe I",
          ],
          usage: [
            "Gunakan sebagai serum atau spot treatment",
            "Dapat digunakan pagi dan malam hari",
            "Cocok dipadukan dengan niacinamide dan zinc untuk jerawat",
            "Aplikasikan pada kulit bersih sebelum pelembab",
            "Bisa digunakan sebagai masker 1-2x seminggu (10-15 menit)",
            "Untuk jerawat meradang, aplikasikan langsung pada spot",
          ],
          warnings: [
            "Hindari jika memiliki alergi terhadap produk lebah",
            "Lakukan patch test sebelum penggunaan pertama",
            "Beberapa formula mungkin mengandung alkohol yang mengeringkan",
            "Hindari penggunaan dengan retinol kuat jika kulit sensitif",
            "Mungkin menyebabkan kemerahan sementara pada kulit sangat sensitif",
            "Efek optimal pada konsentrasi 5-20%",
          ],
          tips: "Pilih produk dengan minimal 10% propolis dan kandungan CAPE (caffeic acid phenethyl ester) tinggi untuk hasil optimal melawan jerawat.",
        },
        "Ekstrak Oat": {
          benefits: [
            "Menenangkan kulit gatal dan iritasi (efektif untuk eksim)",
            "Mengurangi kemerahan hingga 60% dalam 15 menit",
            "Membentuk lapisan pelindung pada kulit yang rusak",
            "Mengandung avenanthramides (anti-inflamasi alami)",
            "Melembabkan kulit kering dan bersisik",
            "Aman untuk bayi dan kulit sensitif",
          ],
          usage: [
            "Dapat digunakan sebagai pembersih atau masker",
            "Untuk kulit iritasi, gunakan kompres oat (1 sendok oat + air hangat)",
            "Formulasi krim lebih efektif untuk eksim kronis",
            "Bisa digunakan setelah prosedur dermatologi",
            "Untuk kulit gatal, aplikasikan 2-3x sehari",
            "Gabungkan dengan ceramides untuk skin barrier rusak",
          ],
          warnings: [
            "Hindari jika alergi terhadap gandum/gluten",
            "Pilih produk yang diformulasi khusus untuk kulit (bukan oatmeal makanan)",
            "Uji patch test untuk kulit sangat sensitif",
            "Efek optimal dari oat koloidal bukan ekstrak biasa",
            "Hindari formulasi dengan pewangi kuat",
          ],
          tips: "Untuk perawatan rumah, bisa membuat pasta oat (haluskan oat + air) sebagai masker 10-15 menit untuk kulit iritasi.",
        },
        "Shea Butter": {
          benefits: [
            "Melembabkan intensif dengan asam lemak esensial (oleat, stearat, linoleat)",
            "Melindungi skin barrier dari kehilangan air transepidermal",
            "Mengurangi iritasi dan inflamasi hingga 60%",
            "Mengandung vitamin A (10,000 IU/kg) dan E untuk nutrisi kulit",
            "Membantu elastisitas kulit dan mengurangi stretch mark",
            "Melindungi dari angin dan cuaca ekstrem",
          ],
          usage: [
            "Gunakan sebagai pelembab akhir di malam hari",
            "Oleskan tipis-tipis pada kulit yang masih sedikit lembab",
            "Cocok untuk area sangat kering seperti siku, lutut, tumit",
            "Bisa digunakan sebagai lip balm alami",
            "Pijat lembut untuk meningkatkan penyerapan",
            "Untuk wajah, pilih formulasi yang lebih ringan",
          ],
          warnings: [
            "Hindari penggunaan berlebihan pada kulit berminyak/acne-prone",
            "Mungkin terlalu berat untuk kulit berminyak di iklim tropis",
            "Pilih versi unrefined untuk manfaat maksimal",
            "Beberapa produk mungkin mengandung kacang - hati-hati untuk yang alergi",
            "Uji patch test untuk kulit sensitif",
            "Hindari formulasi dengan banyak pewangi",
          ],
          tips: "Cari shea butter mentah (raw/unrefined) yang berwarna gading alami dengan aroma kacang lembut. Shea butter refined kehilangan 50% manfaat alaminya.",
        },
        "Sea Buckthorn Oil": {
          benefits: [
            "Sangat kaya akan antioksidan, termasuk Vitamin C (konsentrasi tinggi), Vitamin E, karotenoid (memberikan warna oranye/merah pekat), dan flavonoid.",
            "Mengandung berbagai asam lemak esensial (Omega-3, 6, 7, 9) yang menutrisi dan memperbaiki kulit.",
            "Membantu penyembuhan luka, mengurangi inflamasi, dan melindungi kulit dari kerusakan lingkungan.",
            "Sangat baik untuk kulit kering, dewasa, atau rusak.",
          ],
          usage: [
            "Dapat digunakan sebagai face oil (seringkali perlu diencerkan karena warnanya yang pekat) atau sebagai bahan dalam krim dan serum.",
            "Karena warnanya yang intens, bisa meninggalkan noda sementara pada kulit atau kain jika tidak diencerkan atau digunakan dengan hati-hati.",
          ],
          warnings: [
            "Warna alaminya sangat pekat dan bisa menodai.",
            "Patch test untuk memastikan tidak ada sensitivitas.",
          ],
          tips: "Cari minyak yang diekstrak dari biji dan/atau buahnya (berry), karena keduanya memiliki profil nutrisi yang sedikit berbeda namun sama-sama bermanfaat.",
        },
        "Ginseng Extract": {
          benefits: [
            "Kaya akan antioksidan (seperti ginsenosides) yang melindungi kulit dari kerusakan radikal bebas dan stres lingkungan.",
            "Dapat membantu meningkatkan sirkulasi darah di kulit, memberikan tampilan yang lebih cerah dan 'berenergi'.",
            "Memiliki potensi untuk meningkatkan produksi kolagen dan elastisitas kulit.",
            "Beberapa penelitian menunjukkan sifat anti-inflamasi.",
          ],
          usage: [
            "Sering ditemukan dalam produk skincare Korea, seperti essence, serum, atau krim.",
            "Cocok untuk kulit yang tampak lelah, kusam, atau menunjukkan tanda-tanda penuaan dini.",
          ],
          warnings: [
            "Umumnya aman dan dapat ditoleransi dengan baik oleh sebagian besar jenis kulit.",
          ],
          tips: "Panax ginseng (Korean Red Ginseng) adalah jenis yang paling sering diteliti dan digunakan karena konsentrasi ginsenosides yang tinggi.",
        },
      };

function showDetailModal(title, icon, description) {
    const modal = document.getElementById('detailModal');
    const overlay = document.getElementById('modalOverlay');
    const details = ingredientDetails[title];
    
    if (!details) {
        alert('Detail belum tersedia untuk bahan ini');
        return;
    }
    
    // Set konten modal
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalIcon').textContent = icon;
    document.getElementById('modalDescription').textContent = description;
    
    // Isi manfaat
    const benefitsList = document.getElementById('modalBenefits');
    benefitsList.innerHTML = '';
    details.benefits.forEach(benefit => {
        const li = document.createElement('li');
        li.textContent = benefit;
        benefitsList.appendChild(li);
    });
    
    // Isi cara penggunaan
    const usageList = document.getElementById('modalUsage');
    usageList.innerHTML = '';
    details.usage.forEach(usage => {
        const li = document.createElement('li');
        li.textContent = usage;
        usageList.appendChild(li);
    });
    
    // Isi peringatan
    const warningsList = document.getElementById('modalWarnings');
    warningsList.innerHTML = '';
    details.warnings.forEach(warning => {
        const li = document.createElement('li');
        li.textContent = warning;
        warningsList.appendChild(li);
    });
    
    // Isi tips
    document.getElementById('modalTips').innerHTML = `<strong>Tip:</strong> ${details.tips}`;
    
    // Tampilkan modal
    modal.style.display = 'block';
    overlay.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('detailModal').style.display = 'none';
    document.getElementById('modalOverlay').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Tutup modal dengan ESC
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});
    