import { Form, Input } from 'antd';

export default function UpdateNPAK() {
    return (
        <Form
            layout="vertical"
            className="max-w-3xl mx-auto px-4 mt-6 min-h-screen h-full flex flex-col justify-center"
            initialValues={{
                ahu_number: '',
                sk_number: '',
                certificate_training: '',
                email: '',
                primary_phone: '',
                secondary_phone: '',
                office_telephone: '',
                address: '',
                name: '',
                province: '',
                district: '',
            }}
        >
            <Form.Item label="Nama" name="name">
                    <Input placeholder="Nama Notaris" disabled />
            </Form.Item>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Form.Item label="Provinsi" name="province">
                    <Input disabled placeholder='Provinsi' />
                </Form.Item>

                <Form.Item label="Kabupaten/Kota" name="district">
                    <Input disabled placeholder='Kabupaten/Kota' />
                </Form.Item>
            </div>

            {/* Kolom tunggal */}
            <div className="space-y-4">
                <Form.Item label="No. AHU" name="ahu_number">
                    <Input placeholder="Masukkan No. AHU" />
                </Form.Item>

                <Form.Item label="No. SK" name="sk_number">
                    <Input placeholder="Masukkan No. SK" />
                </Form.Item>

                <Form.Item label="No. Sertifikat Pelatihan" name="certificate_training">
                    <Input placeholder="Masukkan No. Sertifikat" />
                </Form.Item>
            </div>

            {/* Email dan Nomor Telepon */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <Form.Item label="Email" name="email">
                <Input type="email" placeholder="Masukkan Email" />
                </Form.Item>

                <Form.Item label="Nomor Telepon" name="phone_office">
                <Input placeholder="Masukkan Nomor Telepon" />
                </Form.Item>
            </div>

            {/* No. HP dan No. HP Lainnya di satu baris */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Form.Item label="No. HP" name="primary_phone">
                <Input placeholder="Masukkan No. HP" />
                </Form.Item>

                <Form.Item label="No. HP Lainnya" name="secondary_phone">
                <Input placeholder="Masukkan No. HP Lainnya" />
                </Form.Item>
            </div>

            {/* Alamat */}
            <div className="">
                <Form.Item label="Alamat" name="address">
                <Input.TextArea rows={3} placeholder="Masukkan Alamat Lengkap" />
                </Form.Item>
            </div>
        </Form>
    )
}