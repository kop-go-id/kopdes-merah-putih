<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Pengajuan Koperasi</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            background-color: #f9fafb;
            color: #111827;
            padding: 30px;
        }

        h2 {
            color: #1D4ED8;
            margin-bottom: 10px;
        }

        p {
            margin-bottom: 20px;
        }

        table {
            border-collapse: collapse;
            width: 100%;
            background-color: white;
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
            border: 1px solid #e5e7eb;
        }

        table td {
            padding: 10px 15px;
            border: 1px solid #e5e7eb;
        }

        table tr:nth-child(even) {
            background-color: #f3f4f6;
        }

        table td strong {
            color: #374151;
        }

        a.button {
            display: inline-block;
            background-color: #1D4ED8;
            color: #ffffff;
            text-decoration: none;
            padding: 10px 18px;
            border-radius: 6px;
            font-weight: bold;
            transition: background-color 0.3s ease;
        }

        a.button:hover {
            background-color: #2563EB;
        }
    </style>
</head>
<body>
    <h2>Pengajuan Koperasi</h2>
    <p>Berikut adalah data pengajuan koperasi:</p>

    <table>
        <tr><td><strong>Nama Koperasi:</strong></td><td>{{ $data['nama_koperasi'] ?? '-' }}</td></tr>
        <tr><td><strong>Wilayah:</strong></td><td>{{ $data['wilayah'] ?? '-' }}</td></tr>
        <tr><td><strong>Jangka Waktu:</strong></td><td>{{ $data['jangka_waktu'] ?? '-' }}</td></tr>
        <tr><td><strong>Provinsi:</strong></td><td>{{ $data['provinsi'] ?? '-' }}</td></tr>
        <tr><td><strong>Kabupaten:</strong></td><td>{{ $data['kabupaten'] ?? '-' }}</td></tr>
        <tr><td><strong>Kecamatan:</strong></td><td>{{ $data['kecamatan'] ?? '-' }}</td></tr>
        <tr><td><strong>Desa:</strong></td><td>{{ $data['desa'] ?? '-' }}</td></tr>
        <tr><td><strong>Alamat:</strong></td><td>{{ $data['alamat'] ?? '-' }}</td></tr>
        <tr><td><strong>RT/RW:</strong></td><td>{{ $data['rt'] ?? '-' }}/{{ $data['rw'] ?? '-' }}</td></tr>
        <tr><td><strong>Kode Pos:</strong></td><td>{{ $data['kode_pos'] ?? '-' }}</td></tr>
        <tr><td><strong>Telepon:</strong></td><td>{{ $data['telepon_koperasi'] ?? '-' }}</td></tr>
        <tr><td><strong>Email:</strong></td><td>{{ $data['email_koperasi'] ?? '-' }}</td></tr>
        <tr><td><strong>Penanggung Jawab:</strong></td><td>{{ $data['pj_nama'] ?? '-' }}</td></tr>
        <tr><td><strong>Email PJ:</strong></td><td>{{ $data['pj_email'] ?? '-' }}</td></tr>
        <tr><td><strong>Telepon PJ:</strong></td><td>{{ $data['pj_telepon'] ?? '-' }}</td></tr>
    </table>

    <p>
        <a href="{{ $data['action_url'] }}" class="button">Proses Pengajuan</a>
    </p>
</body>
</html>
