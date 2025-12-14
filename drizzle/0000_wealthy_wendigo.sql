CREATE TABLE `admin` (
	`id` int AUTO_INCREMENT NOT NULL,
	`email` varchar(255) NOT NULL,
	`password` varchar(255) NOT NULL,
	`created_at` varchar(255) NOT NULL,
	CONSTRAINT `admin_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `harapan` (
	`id_harapan` int AUTO_INCREMENT NOT NULL,
	`isi_laporan` text NOT NULL,
	`created_at` varchar(255) NOT NULL,
	CONSTRAINT `harapan_id_harapan` PRIMARY KEY(`id_harapan`)
);
--> statement-breakpoint
CREATE TABLE `kritik` (
	`id_kritik` int AUTO_INCREMENT NOT NULL,
	`isi_laporan` text NOT NULL,
	`created_at` varchar(255) NOT NULL,
	CONSTRAINT `kritik_id_kritik` PRIMARY KEY(`id_kritik`)
);
--> statement-breakpoint
CREATE TABLE `perundungan` (
	`id_perundungan` int AUTO_INCREMENT NOT NULL,
	`isi_laporan` text NOT NULL,
	`created_at` varchar(255) NOT NULL,
	CONSTRAINT `perundungan_id_perundungan` PRIMARY KEY(`id_perundungan`)
);
