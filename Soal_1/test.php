<?php

$jumlah_beli = 0;
$bayar=0;
$diskon=0;
$jumlah = [];
$harga = [];
$sub_total = [];
$nama_barang = [];
$total=0;

echo "Nama Warung: ";
$warung = fgets(STDIN, 30);
echo "Tanggal : ";
$tanggal = fgets(STDIN, 30);
echo "Nama Kasir : ";
$kasir = fgets(STDIN, 30);
echo "Jumlah Produk Yang Dibeli : ";
$jumlah_beli = trim(fgets(STDIN));
echo "\n\n";

if ($jumlah_beli == 0) {
    echo "Tidak pesan!!!";
} else{
    for ($i=0; $i < $jumlah_beli; $i++) {
        echo "Barang ke-", $i+1, "\n";
        echo "------------------------------\n";
        echo "Masukan Nama Produk : ";
        $nama_barang[$i] = trim(fgets(STDIN));
        echo "Masukan Jumlah Barang : ";
        $jumlah[$i] = trim(fgets(STDIN));
        echo "Masukan Harga : Rp ";
        $harga[$i] = trim(fgets(STDIN));
        echo "------------------------------\n\n\n";
            
            $sub_total[$i] = ($jumlah[$i])*($harga[$i]);
            $total+=$sub_total[$i];
            
        }
}

echo "Warung $warung\n";
echo "Tangggal : $tanggal\n";
echo "Nama Kasir :   $kasir\n";
echo "==============================\n\n";
for ($i=0; $i <$jumlah_beli ; $i++) {
    echo $i+1,". "; 
    echo "$nama_barang[$i] ";
    echo " $jumlah[$i]x........Rp ";
    echo "$sub_total[$i] \n\n";
}
echo "Total.................Rp $total"

?>