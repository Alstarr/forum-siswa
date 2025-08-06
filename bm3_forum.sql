-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 25 Jul 2025 pada 06.21
-- Versi server: 10.4.27-MariaDB
-- Versi PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bm3_forum`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `admin`
--

INSERT INTO `admin` (`id`, `email`, `password`, `created_at`) VALUES
(1, 'forum_bm3@sch.id', 'admin1234#', '2025-07-22 06:22:23');

-- --------------------------------------------------------

--
-- Struktur dari tabel `harapan`
--

CREATE TABLE `harapan` (
  `id_harapan` int(11) NOT NULL,
  `isi_laporan` text NOT NULL,
  `created_at` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `harapan`
--

INSERT INTO `harapan` (`id_harapan`, `isi_laporan`, `created_at`) VALUES
(1, 'Semoga OSIS membuat lebih banyak kegiatan positif', '2025-07-04 11:02:17'),
(2, 'Ingin ada pelatihan leadership rutin', '2025-07-04 11:02:17');

-- --------------------------------------------------------

--
-- Struktur dari tabel `kritik`
--

CREATE TABLE `kritik` (
  `id_kritik` int(11) NOT NULL,
  `isi_laporan` text NOT NULL,
  `created_at` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `kritik`
--

INSERT INTO `kritik` (`id_kritik`, `isi_laporan`, `created_at`) VALUES
(1, 'Tingkatkan kebersihan lingkungan sekolah', '2025-07-04 11:02:17'),
(2, 'Perbaiki fasilitas perpustakaan', '2025-07-04 11:02:17');

-- --------------------------------------------------------

--
-- Struktur dari tabel `perundungan`
--

CREATE TABLE `perundungan` (
  `id_perundungan` int(11) NOT NULL,
  `isi_laporan` text NOT NULL,
  `created_at` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `perundungan`
--

INSERT INTO `perundungan` (`id_perundungan`, `isi_laporan`, `created_at`) VALUES
(1, 'Siswa X sering dirundung karena berbeda pendapat', '2025-07-04 11:02:17'),
(2, 'Mohon tindakan tegas terhadap kasus perundungan di kelas XI IPA 2', '2025-07-04 11:02:17');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indeks untuk tabel `harapan`
--
ALTER TABLE `harapan`
  ADD PRIMARY KEY (`id_harapan`);

--
-- Indeks untuk tabel `kritik`
--
ALTER TABLE `kritik`
  ADD PRIMARY KEY (`id_kritik`);

--
-- Indeks untuk tabel `perundungan`
--
ALTER TABLE `perundungan`
  ADD PRIMARY KEY (`id_perundungan`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `harapan`
--
ALTER TABLE `harapan`
  MODIFY `id_harapan` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT untuk tabel `kritik`
--
ALTER TABLE `kritik`
  MODIFY `id_kritik` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT untuk tabel `perundungan`
--
ALTER TABLE `perundungan`
  MODIFY `id_perundungan` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
