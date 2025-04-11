import { Form, Input } from 'antd';

export default function InformasiNPAK() {
    return (
        <Form
            layout="vertical"
            className="max-w-3xl mx-auto px-4 mt-6 min-h-screen h-full flex flex-col justify-center"
            initialValues={{
                ahu: '',
                sk: '',
                sertifikat: '',
                email: '',
                hp: '',
                hpLain: '',
                telepon: '',
                alamat: '',
            }}
        >
            {/* Kolom tunggal */}
            <div className="space-y-4">
                <Form.Item label="No. AHU" name="ahu">
                <Input placeholder="Masukkan No. AHU" />
                </Form.Item>

                <Form.Item label="No. SK" name="sk">
                <Input placeholder="Masukkan No. SK" />
                </Form.Item>

                <Form.Item label="No. Sertifikat Pelatihan" name="sertifikat">
                <Input placeholder="Masukkan No. Sertifikat" />
                </Form.Item>
            </div>

            {/* Email dan Nomor Telepon */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <Form.Item label="Email" name="email">
                <Input type="email" placeholder="Masukkan Email" />
                </Form.Item>

                <Form.Item label="Nomor Telepon" name="telepon">
                <Input placeholder="Masukkan Nomor Telepon" />
                </Form.Item>
            </div>

            {/* No. HP dan No. HP Lainnya di satu baris */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Form.Item label="No. HP" name="hp">
                <Input placeholder="Masukkan No. HP" />
                </Form.Item>

                <Form.Item label="No. HP Lainnya" name="hpLain">
                <Input placeholder="Masukkan No. HP Lainnya" />
                </Form.Item>
            </div>

            {/* Alamat */}
            <div className="">
                <Form.Item label="Alamat" name="alamat">
                <Input.TextArea rows={3} placeholder="Masukkan Alamat Lengkap" />
                </Form.Item>
            </div>
        </Form>
    )
}