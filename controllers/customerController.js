// controllers/customersController.js
const Customer = require('../models/customerModel');
const User = require('../models/userModel');

const getUser = async (req) => {
    try {
        const userId = req.session.userId; // Assuming you store the user ID in the session
        const user = await User.findByPk(userId);
        return user;
    } catch (error) {
        console.error('Error fetching user:', error);
        return null;
    }
};
// Menampilkan halaman daftar pelanggan
exports.customers_get = async (req, res) => {
    try {
        // Mengambil semua data pelanggan dari model
        const customers = await Customer.getAllCustomers();
        const user = await getUser(req);

        // Merender halaman "Customers" dan mengirim data pelanggan ke dalam template
        res.render('auth/dashboard/customer/customerPage', { customers, user });
    } catch (error) {
        console.error('Error fetching customers:', error);
        res.status(500).send('Internal Server Error');
    }
};

// Menampilkan halaman edit pelanggan berdasarkan ID
exports.customer_edit_get = async (req, res) => {
  const customerId = req.params.id; // Mengambil ID pelanggan dari parameter URL
  // Lakukan pengambilan data pelanggan dari database berdasarkan ID
  try {
      const customer = await Customer.findByPk(customerId);
      const user = await getUser(req);
      // Render halaman edit pelanggan dan kirim data pelanggan ke template
      res.render('auth/dashboard/customer/customerEditPage', { customer, user });
  } catch (error) {
      console.error('Error fetching customer:', error);
      res.status(500).send('Internal Server Error');
  }
};
exports.customer_edit_post = async (req, res) => {
  const customerId = req.params.id; // Mengambil ID pelanggan dari parameter URL
  const { name, email, phone, address } = req.body; // Mengambil data yang diubah dari formulir

  try {
      // Lakukan pembaruan data pelanggan di database
      await Customer.update({
          name: name,
          email: email,
          phone: phone,
          address: address
      }, {
          where: { id: customerId }
      });

      // Redirect ke halaman detail pelanggan atau halaman lain yang sesuai
      res.redirect('/customers');
  } catch (error) {
      console.error('Error updating customer:', error);
      res.status(500).send('Internal Server Error');
  }
};
exports.customer_delete_post = async (req, res) => {
  const customerId = req.params.id; // Ambil ID pelanggan dari URL
  try {
      // Lakukan penghapusan data pelanggan dari database berdasarkan ID
      await Customer.destroy({
          where: {
              id: customerId
          }
      });
      // Redirect kembali ke halaman pelanggan setelah penghapusan berhasil
      res.redirect('/customers');
  } catch (error) {
      console.error('Error deleting customer:', error);
      res.status(500).send('Internal Server Error');
  }
};

exports.customer_delete_get = async (req, res) => {
  const customerId = req.params.id;
  try {
    const user = await getUser(req);
      const customer = await Customer.findByPk(customerId);
      res.render('customer_delete', { customer, user });
  } catch (error) {
      console.error('Error fetching customer:', error);
      res.status(500).send('Internal Server Error');
  }
};
exports.customer_delete = async (req, res) => {
  const customerId = req.params.id;
  try {
      await Customer.destroy({
          where: { id: customerId }
      });
      res.redirect('/customers');
  } catch (error) {
      console.error('Error deleting customer:', error);
      res.status(500).send('Internal Server Error');
  }
};

// Menampilkan halaman tambah pelanggan
exports.customer_add_get = async (req, res) => {
    const user = await getUser(req);
    const customerId = req.params.id;
    const customer = await Customer.findByPk(customerId);
    res.render('auth/dashboard/customer/customerAddPage', { customer, user }); // Ganti 'addCustomer' dengan nama file tampilan tambah pelanggan Anda
}

// Menambahkan pelanggan baru
exports.customer_add_post = async (req, res) => {
    const { name, email, phone, address } = req.body;

    try {
        // Membuat objek pelanggan baru
        const newCustomer = await Customer.create({
            name: name,
            email: email,
            phone: phone,
            address: address
        });

        // Redirect ke halaman lain setelah pelanggan ditambahkan
        res.redirect('/customers'); // Ganti '/customers' dengan rute yang sesuai dengan kebutuhan Anda
    } catch (error) {
        console.error('Error adding customer:', error);
        res.status(500).send('Internal Server Error');
    }
}