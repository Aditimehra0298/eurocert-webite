import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { usePosts, addPost, updatePost, deletePost } from '../hooks/usePosts';
import { useContacts, markAsRead, deleteContact } from '../hooks/useContacts';
import { useClients, addClient, updateClient, deleteClient as removeClient } from '../hooks/useClients';
import { seedAll } from '../seedFirestore';

const defaultClientForm = {
  clientName: '',
  dateOfAudit: '',
  categoryFSMS: '',
  certificateNo: '',
  expiryDate: '',
  schemeName: '',
  status: 'Active',
  remarks: '',
  scope: '',
};

const defaultFormData = {
  title: '',
  tag: '',
  date: '',
  href: '',
  image: '',
  excerpt: '',
  body: '',
  gallery: '',
};

export default function AdminDashboard() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const { posts } = usePosts();
  const { contacts } = useContacts();
  const { clients } = useClients();
  const [activeTab, setActiveTab] = useState('posts');
  const [editingPost, setEditingPost] = useState(null);
  const [formData, setFormData] = useState(defaultFormData);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState(null);
  const [deleteContactConfirm, setDeleteContactConfirm] = useState(null);
  const [successMsg, setSuccessMsg] = useState('');
  const [viewingContact, setViewingContact] = useState(null);
  const [clientForm, setClientForm] = useState(defaultClientForm);
  const [editingClient, setEditingClient] = useState(null);
  const [showClientForm, setShowClientForm] = useState(false);
  const [deleteClientConfirm, setDeleteClientConfirm] = useState(null);

  const unreadCount = contacts.filter((c) => !c.read).length;

  async function handleLogout() {
    await logout();
    navigate('/admin');
  }

  function showSuccess(msg) {
    setSuccessMsg(msg);
    setTimeout(() => setSuccessMsg(''), 3000);
  }

  function toJSDate(val) {
    if (!val) return null;
    if (val.toDate) return val.toDate();
    const d = new Date(val);
    return isNaN(d) ? null : d;
  }

  function formatDate(dateStr) {
    const d = toJSDate(dateStr);
    if (!d) return '—';
    return d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
  }

  function formatDateTime(dateStr) {
    const d = toJSDate(dateStr);
    if (!d) return '—';
    return d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });
  }

  // Post Functions
  function openAddForm() {
    setEditingPost(null);
    setFormData(defaultFormData);
    setShowForm(true);
  }

  function openEditForm(post) {
    setEditingPost(post.id);
    setFormData({
      title: post.title || '',
      tag: post.tag || '',
      date: post.date || '',
      href: post.href || '',
      image: post.image || '',
      excerpt: post.excerpt || '',
      body: post.body || '',
      gallery: (post.gallery || []).join(', '),
    });
    setShowForm(true);
  }

  function closeForm() {
    setShowForm(false);
    setEditingPost(null);
    setFormData(defaultFormData);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const galleryArr = formData.gallery
        ? formData.gallery.split(',').map((s) => s.trim()).filter(Boolean)
        : [];
      const postData = { ...formData, gallery: galleryArr };

      if (editingPost) {
        await updatePost(editingPost, postData);
        showSuccess('Post updated successfully!');
      } else {
        await addPost(postData);
        showSuccess('Post added successfully!');
      }
      closeForm();
    } catch (err) {
      showSuccess('Error: ' + err.message);
    }
    setLoading(false);
  }

  async function handleDeletePost(id) {
    await deletePost(id);
    setDeleteConfirm(null);
    showSuccess('Post deleted!');
  }

  // Contact Functions
  function openContact(contact) {
    if (!contact.read) markAsRead(contact.id);
    setViewingContact(contact);
  }

  async function handleDeleteContact(id) {
    await deleteContact(id);
    setDeleteContactConfirm(null);
    setViewingContact(null);
    showSuccess('Contact deleted!');
  }

  // Client Functions
  function openAddClient() {
    setEditingClient(null);
    setClientForm(defaultClientForm);
    setShowClientForm(true);
  }
  function openEditClient(client) {
    setEditingClient(client.id);
    setClientForm({
      clientName: client.clientName || '',
      dateOfAudit: client.dateOfAudit || '',
      categoryFSMS: client.categoryFSMS || '',
      certificateNo: client.certificateNo || '',
      expiryDate: client.expiryDate || '',
      schemeName: client.schemeName || '',
      status: client.status || 'Active',
      remarks: client.remarks || '',
      scope: client.scope || '',
    });
    setShowClientForm(true);
  }
  function closeClientForm() {
    setShowClientForm(false);
    setEditingClient(null);
    setClientForm(defaultClientForm);
  }
  async function handleClientSubmit(e) {
    e.preventDefault();
    try {
      if (editingClient) {
        await updateClient(editingClient, clientForm);
        showSuccess('Client updated!');
      } else {
        await addClient(clientForm);
        showSuccess('Client added!');
      }
      closeClientForm();
    } catch (err) {
      showSuccess('Error: ' + err.message);
    }
  }
  async function handleDeleteClient(id) {
    await removeClient(id);
    setDeleteClientConfirm(null);
    showSuccess('Client deleted!');
  }

  const tabs = [
    { id: 'posts', label: 'Posts', icon: 'fa-newspaper', count: posts.length },
    { id: 'contacts', label: 'Contacts', icon: 'fa-envelope', count: contacts.length, badge: unreadCount },
    { id: 'clients', label: 'Certified Clients', icon: 'fa-users', count: clients.length },
  ];

  return (
    <div className="min-h-screen bg-[#030a16]">
      {/* Top Nav */}
      <nav className="border-b border-white/5 bg-white/2 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/">
              <img
                src="https://i0.wp.com/www.eurocert.asia/wp-content/uploads/2020/06/cropped-LOGO_EUROCERT_v2-2.png?fit=12691181&ssl=1"
                alt="Eurocert"
                className="h-10 w-auto drop-shadow-[0_0_10px_rgba(212,168,67,0.3)]"
              />
            </Link>
            <div className="hidden sm:block w-px h-8 bg-white/10"></div>
            <h1 className="hidden sm:block heading-font text-xs font-bold text-white/60 uppercase tracking-widest">
              Admin Dashboard
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden md:block text-white/40 text-xs">{currentUser?.email}</span>
            <button
              onClick={handleLogout}
              className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white/60 text-xs font-bold uppercase tracking-wider hover:bg-white/10 hover:text-white transition"
            >
              <i className="fas fa-sign-out-alt mr-2"></i>Logout
            </button>
          </div>
        </div>
      </nav>

      {/* Success Toast */}
      {successMsg && (
        <div className="fixed top-6 right-6 z-[60] px-6 py-4 rounded-xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-sm font-medium flex items-center gap-3 shadow-xl">
          <i className="fas fa-check-circle"></i>
          {successMsg}
        </div>
      )}

      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-10">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-eurogold-400/10 flex items-center justify-center">
                <i className="fas fa-newspaper text-eurogold-400"></i>
              </div>
              <div>
                <p className="text-white/40 text-[10px] heading-font uppercase tracking-widest">Total Posts</p>
                <p className="text-white text-2xl font-bold heading-font">{posts.length}</p>
              </div>
            </div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                <i className="fas fa-envelope text-blue-400"></i>
              </div>
              <div>
                <p className="text-white/40 text-[10px] heading-font uppercase tracking-widest">Total Contacts</p>
                <p className="text-white text-2xl font-bold heading-font">{contacts.length}</p>
              </div>
            </div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center">
                <i className="fas fa-bell text-amber-400"></i>
              </div>
              <div>
                <p className="text-white/40 text-[10px] heading-font uppercase tracking-widest">Unread</p>
                <p className="text-white text-2xl font-bold heading-font">{unreadCount}</p>
              </div>
            </div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                <i className="fas fa-user-shield text-emerald-400"></i>
              </div>
              <div>
                <p className="text-white/40 text-[10px] heading-font uppercase tracking-widest">Logged in as</p>
                <p className="text-white text-sm font-bold heading-font truncate max-w-[160px]">{currentUser?.email}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Seed Banner - shows only when Firestore is empty */}
        {posts.length === 0 && contacts.length === 0 && clients.length === 0 && (
          <div className="mb-6 p-5 rounded-2xl bg-eurogold-400/10 border border-eurogold-400/20 flex items-center justify-between">
            <div>
              <h3 className="text-white font-bold heading-font text-sm">First Time Setup</h3>
              <p className="text-white/50 text-xs mt-1">Your Firestore database is empty. Seed it with default posts & client data.</p>
            </div>
            <button onClick={async () => { await seedAll(); showSuccess('Default data seeded!'); }} className="px-6 py-3 rounded-xl bg-eurogold-400 text-[#030a16] heading-font text-[11px] font-bold uppercase tracking-widest hover:bg-eurogold-300 transition shrink-0">
              <i className="fas fa-database mr-2"></i>Seed Data
            </button>
          </div>
        )}

        {/* Tabs */}
        <div className="flex gap-2 mb-8 border-b border-white/5 pb-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-3 rounded-xl heading-font text-[11px] font-bold uppercase tracking-widest transition flex items-center gap-2 ${
                activeTab === tab.id
                  ? 'bg-eurogold-400 text-[#030a16]'
                  : 'bg-white/5 text-white/50 hover:bg-white/10 hover:text-white'
              }`}
            >
              <i className={`fas ${tab.icon} text-xs`}></i>
              {tab.label}
              <span className={`ml-1 px-2 py-0.5 rounded-full text-[9px] ${
                activeTab === tab.id ? 'bg-[#030a16]/20 text-[#030a16]' : 'bg-white/10 text-white/40'
              }`}>
                {tab.count}
              </span>
              {tab.badge > 0 && (
                <span className="px-2 py-0.5 rounded-full text-[9px] bg-red-500 text-white">
                  {tab.badge}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* ===== POSTS TAB ===== */}
        {activeTab === 'posts' && (
          <>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="heading-font text-xl font-bold text-white">Manage Posts</h2>
                <p className="text-white/40 text-sm mt-1">Add, edit, or remove posts. New posts auto-appear on the website.</p>
              </div>
              <button
                onClick={openAddForm}
                className="px-6 py-3 rounded-xl bg-eurogold-400 text-[#030a16] heading-font text-[11px] font-bold uppercase tracking-widest hover:bg-eurogold-300 transition shadow-xl flex items-center gap-2"
              >
                <i className="fas fa-plus"></i>Add Post
              </button>
            </div>

            {posts.length === 0 ? (
              <div className="bg-white/5 border border-white/10 rounded-2xl p-16 text-center">
                <div className="w-20 h-20 rounded-2xl bg-white/5 flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-newspaper text-white/20 text-3xl"></i>
                </div>
                <h3 className="heading-font text-lg font-bold text-white/60 mb-2">No Posts Yet</h3>
                <p className="text-white/30 text-sm mb-6">Add your first post to get started.</p>
                <button onClick={openAddForm} className="px-6 py-3 rounded-xl bg-eurogold-400 text-[#030a16] heading-font text-[11px] font-bold uppercase tracking-widest hover:bg-eurogold-300 transition">
                  <i className="fas fa-plus mr-2"></i>Add First Post
                </button>
              </div>
            ) : (
              <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left px-6 py-4 heading-font text-[10px] font-bold uppercase tracking-widest text-white/40">Image</th>
                        <th className="text-left px-6 py-4 heading-font text-[10px] font-bold uppercase tracking-widest text-white/40">Title</th>
                        <th className="text-left px-6 py-4 heading-font text-[10px] font-bold uppercase tracking-widest text-white/40">Tag</th>
                        <th className="text-left px-6 py-4 heading-font text-[10px] font-bold uppercase tracking-widest text-white/40">Date</th>
                        <th className="text-left px-6 py-4 heading-font text-[10px] font-bold uppercase tracking-widest text-white/40">Content</th>
                        <th className="text-right px-6 py-4 heading-font text-[10px] font-bold uppercase tracking-widest text-white/40">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {posts.map((post) => (
                        <tr key={post.id} className="border-b border-white/5 hover:bg-white/3 transition">
                          <td className="px-6 py-4">
                            <div className="w-14 h-14 rounded-xl overflow-hidden border border-white/10 bg-white/5">
                              {post.image ? (
                                <img src={post.image} alt="" className="w-full h-full object-cover" />
                              ) : (
                                <div className="w-full h-full flex items-center justify-center"><i className="fas fa-image text-white/20"></i></div>
                              )}
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <p className="text-white text-sm font-medium line-clamp-2 max-w-xs">{post.title}</p>
                            <p className="text-white/30 text-xs mt-1 truncate max-w-xs">{post.href}</p>
                          </td>
                          <td className="px-6 py-4">
                            <span className="inline-flex px-3 py-1 rounded-full bg-eurogold-400/10 border border-eurogold-400/20 text-eurogold-400 text-[10px] font-bold uppercase tracking-wider heading-font">
                              {post.tag}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-white/50 text-sm">{formatDate(post.date)}</td>
                          <td className="px-6 py-4">
                            {post.body ? (
                              <span className="inline-flex px-2 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 text-[9px] font-bold uppercase tracking-wider heading-font">
                                <i className="fas fa-check mr-1"></i>Full
                              </span>
                            ) : (
                              <span className="inline-flex px-2 py-1 rounded-lg bg-white/5 text-white/30 text-[9px] font-bold uppercase tracking-wider heading-font">
                                Link Only
                              </span>
                            )}
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center justify-end gap-2">
                              <button onClick={() => openEditForm(post)} className="w-9 h-9 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 hover:bg-blue-500/20 transition" title="Edit">
                                <i className="fas fa-pen text-xs"></i>
                              </button>
                              <button onClick={() => setDeleteConfirm(post.id)} className="w-9 h-9 rounded-lg bg-red-500/10 flex items-center justify-center text-red-400 hover:bg-red-500/20 transition" title="Delete">
                                <i className="fas fa-trash text-xs"></i>
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </>
        )}

        {/* ===== CONTACTS TAB ===== */}
        {activeTab === 'contacts' && (
          <>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="heading-font text-xl font-bold text-white">Contact Submissions</h2>
                <p className="text-white/40 text-sm mt-1">All messages from the website contact form</p>
              </div>
            </div>

            {contacts.length === 0 ? (
              <div className="bg-white/5 border border-white/10 rounded-2xl p-16 text-center">
                <div className="w-20 h-20 rounded-2xl bg-white/5 flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-inbox text-white/20 text-3xl"></i>
                </div>
                <h3 className="heading-font text-lg font-bold text-white/60 mb-2">No Messages Yet</h3>
                <p className="text-white/30 text-sm">When someone fills the contact form, their message will appear here.</p>
              </div>
            ) : (
              <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left px-6 py-4 heading-font text-[10px] font-bold uppercase tracking-widest text-white/40">Status</th>
                        <th className="text-left px-6 py-4 heading-font text-[10px] font-bold uppercase tracking-widest text-white/40">Name</th>
                        <th className="text-left px-6 py-4 heading-font text-[10px] font-bold uppercase tracking-widest text-white/40">Email</th>
                        <th className="text-left px-6 py-4 heading-font text-[10px] font-bold uppercase tracking-widest text-white/40">Phone</th>
                        <th className="text-left px-6 py-4 heading-font text-[10px] font-bold uppercase tracking-widest text-white/40">Service</th>
                        <th className="text-left px-6 py-4 heading-font text-[10px] font-bold uppercase tracking-widest text-white/40">Source</th>
                        <th className="text-left px-6 py-4 heading-font text-[10px] font-bold uppercase tracking-widest text-white/40">Date</th>
                        <th className="text-right px-6 py-4 heading-font text-[10px] font-bold uppercase tracking-widest text-white/40">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {contacts.map((contact) => (
                        <tr
                          key={contact.id}
                          className={`border-b border-white/5 hover:bg-white/3 transition cursor-pointer ${!contact.read ? 'bg-eurogold-400/3' : ''}`}
                          onClick={() => openContact(contact)}
                        >
                          <td className="px-6 py-4">
                            {!contact.read ? (
                              <span className="w-3 h-3 rounded-full bg-eurogold-400 inline-block shadow-[0_0_8px_rgba(212,168,67,0.5)]"></span>
                            ) : (
                              <span className="w-3 h-3 rounded-full bg-white/10 inline-block"></span>
                            )}
                          </td>
                          <td className="px-6 py-4">
                            <p className={`text-sm font-medium ${!contact.read ? 'text-white' : 'text-white/60'}`}>{contact.name}</p>
                          </td>
                          <td className="px-6 py-4 text-white/50 text-sm">{contact.email}</td>
                          <td className="px-6 py-4 text-white/50 text-sm">{contact.phone || '—'}</td>
                          <td className="px-6 py-4">
                            <span className="inline-flex px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-wider heading-font">
                              {contact.service}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <span className="inline-flex px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-[10px] font-bold uppercase tracking-wider heading-font">
                              {contact.source || 'Website'}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-white/50 text-xs">{formatDateTime(contact.submittedAt)}</td>
                          <td className="px-6 py-4">
                            <div className="flex items-center justify-end gap-2" onClick={(e) => e.stopPropagation()}>
                              <button onClick={() => openContact(contact)} className="w-9 h-9 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 hover:bg-blue-500/20 transition" title="View">
                                <i className="fas fa-eye text-xs"></i>
                              </button>
                              <button onClick={() => setDeleteContactConfirm(contact.id)} className="w-9 h-9 rounded-lg bg-red-500/10 flex items-center justify-center text-red-400 hover:bg-red-500/20 transition" title="Delete">
                                <i className="fas fa-trash text-xs"></i>
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </>
        )}

        {/* ===== CLIENTS TAB ===== */}
        {activeTab === 'clients' && (
          <>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="heading-font text-xl font-bold text-white">Certified Clients</h2>
                <p className="text-white/40 text-sm mt-1">Manage the certified clients list displayed on the website</p>
              </div>
              <button onClick={openAddClient} className="px-6 py-3 rounded-xl bg-eurogold-400 text-[#030a16] heading-font text-[11px] font-bold uppercase tracking-widest hover:bg-eurogold-300 transition shadow-xl flex items-center gap-2">
                <i className="fas fa-plus"></i>Add Client
              </button>
            </div>

            {clients.length === 0 ? (
              <div className="bg-white/5 border border-white/10 rounded-2xl p-16 text-center">
                <div className="w-20 h-20 rounded-2xl bg-white/5 flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-users text-white/20 text-3xl"></i>
                </div>
                <h3 className="heading-font text-lg font-bold text-white/60 mb-2">No Clients Yet</h3>
                <p className="text-white/30 text-sm mb-6">Add your first certified client.</p>
                <button onClick={openAddClient} className="px-6 py-3 rounded-xl bg-eurogold-400 text-[#030a16] heading-font text-[11px] font-bold uppercase tracking-widest hover:bg-eurogold-300 transition">
                  <i className="fas fa-plus mr-2"></i>Add First Client
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {clients.map((client) => (
                  <div key={client.id} className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
                    <div className="flex items-center justify-between px-6 py-4 bg-white/3">
                      <div className="flex items-center gap-4">
                        <span className="heading-font text-lg font-bold text-eurogold-400">#{client.serialNo}</span>
                        <div>
                          <h4 className="text-white font-bold text-sm">{client.clientName}</h4>
                          <p className="text-white/40 text-xs">{client.schemeName} &bull; Cert: {client.certificateNo}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider heading-font ${
                          client.status === 'Active' ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/20' :
                          client.status === 'Suspended' ? 'bg-amber-500/15 text-amber-400 border border-amber-500/20' :
                          'bg-red-500/15 text-red-400 border border-red-500/20'
                        }`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${client.status === 'Active' ? 'bg-emerald-400' : client.status === 'Suspended' ? 'bg-amber-400' : 'bg-red-400'}`}></span>
                          {client.status}
                        </span>
                        <button onClick={() => openEditClient(client)} className="w-9 h-9 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 hover:bg-blue-500/20 transition" title="Edit">
                          <i className="fas fa-pen text-xs"></i>
                        </button>
                        <button onClick={() => setDeleteClientConfirm(client.id)} className="w-9 h-9 rounded-lg bg-red-500/10 flex items-center justify-center text-red-400 hover:bg-red-500/20 transition" title="Delete">
                          <i className="fas fa-trash text-xs"></i>
                        </button>
                      </div>
                    </div>
                    <div className="px-6 py-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
                      <div className="p-2 rounded-lg bg-white/3">
                        <p className="text-white/30 text-[9px] uppercase tracking-wider heading-font font-bold">Audit Date</p>
                        <p className="text-white/70 text-xs mt-0.5">{client.dateOfAudit}</p>
                      </div>
                      <div className="p-2 rounded-lg bg-white/3">
                        <p className="text-white/30 text-[9px] uppercase tracking-wider heading-font font-bold">Category</p>
                        <p className="text-white/70 text-xs mt-0.5">{client.categoryFSMS}</p>
                      </div>
                      <div className="p-2 rounded-lg bg-white/3">
                        <p className="text-white/30 text-[9px] uppercase tracking-wider heading-font font-bold">Expiry</p>
                        <p className="text-white/70 text-xs mt-0.5">{client.expiryDate}</p>
                      </div>
                      <div className="p-2 rounded-lg bg-white/3">
                        <p className="text-white/30 text-[9px] uppercase tracking-wider heading-font font-bold">Remarks</p>
                        <p className="text-white/70 text-xs mt-0.5">{client.remarks || '—'}</p>
                      </div>
                    </div>
                    {client.scope && (
                      <div className="px-6 pb-4">
                        <p className="text-white/20 text-[9px] uppercase tracking-wider heading-font font-bold mb-1">Scope</p>
                        <p className="text-white/50 text-xs leading-relaxed line-clamp-2">{client.scope}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>

      {/* ===== CLIENT FORM MODAL ===== */}
      {showClientForm && (
        <div className="fixed inset-0 z-50 flex items-start justify-center p-4 overflow-y-auto">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={closeClientForm}></div>
          <div className="relative bg-[#0a1628] border border-white/10 rounded-3xl w-full max-w-2xl p-8 shadow-[0_0_80px_rgba(0,0,0,0.5)] my-10">
            <div className="flex items-center justify-between mb-8">
              <h3 className="heading-font text-lg font-bold text-white">{editingClient ? 'Edit Client' : 'Add New Client'}</h3>
              <button onClick={closeClientForm} className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-white/50 hover:bg-white/10 hover:text-white transition">
                <i className="fas fa-times text-sm"></i>
              </button>
            </div>
            <form onSubmit={handleClientSubmit} className="space-y-5">
              <div>
                <label className="heading-font text-[10px] font-bold uppercase tracking-widest text-white/60 mb-2 block">Client Name *</label>
                <input type="text" value={clientForm.clientName} onChange={(e) => setClientForm({ ...clientForm, clientName: e.target.value })} required className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-eurogold-400/50 transition" placeholder="e.g. ABC Industries Pvt. Ltd" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="heading-font text-[10px] font-bold uppercase tracking-widest text-white/60 mb-2 block">Scheme Name *</label>
                  <input type="text" value={clientForm.schemeName} onChange={(e) => setClientForm({ ...clientForm, schemeName: e.target.value })} required className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-eurogold-400/50 transition" placeholder="e.g. ISO 22000" />
                </div>
                <div>
                  <label className="heading-font text-[10px] font-bold uppercase tracking-widest text-white/60 mb-2 block">Certificate No. *</label>
                  <input type="text" value={clientForm.certificateNo} onChange={(e) => setClientForm({ ...clientForm, certificateNo: e.target.value })} required className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-eurogold-400/50 transition" placeholder="e.g. 001.2024" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="heading-font text-[10px] font-bold uppercase tracking-widest text-white/60 mb-2 block">Date of Audit</label>
                  <input type="text" value={clientForm.dateOfAudit} onChange={(e) => setClientForm({ ...clientForm, dateOfAudit: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-eurogold-400/50 transition" placeholder="e.g. 12-13/08/2024" />
                </div>
                <div>
                  <label className="heading-font text-[10px] font-bold uppercase tracking-widest text-white/60 mb-2 block">Expiry Date</label>
                  <input type="text" value={clientForm.expiryDate} onChange={(e) => setClientForm({ ...clientForm, expiryDate: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-eurogold-400/50 transition" placeholder="e.g. 2027-09-25" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="heading-font text-[10px] font-bold uppercase tracking-widest text-white/60 mb-2 block">Category of FSMS</label>
                  <input type="text" value={clientForm.categoryFSMS} onChange={(e) => setClientForm({ ...clientForm, categoryFSMS: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-eurogold-400/50 transition" placeholder="e.g. CIV & CI" />
                </div>
                <div>
                  <label className="heading-font text-[10px] font-bold uppercase tracking-widest text-white/60 mb-2 block">Status</label>
                  <select value={clientForm.status} onChange={(e) => setClientForm({ ...clientForm, status: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-sm text-white focus:outline-none focus:border-eurogold-400/50 transition">
                    <option value="Active">Active</option>
                    <option value="Suspended">Suspended</option>
                    <option value="Withdrawn">Withdrawn</option>
                    <option value="Expired">Expired</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="heading-font text-[10px] font-bold uppercase tracking-widest text-white/60 mb-2 block">Remarks</label>
                <input type="text" value={clientForm.remarks} onChange={(e) => setClientForm({ ...clientForm, remarks: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-eurogold-400/50 transition" placeholder="e.g. Unaccredited Certificate" />
              </div>
              <div>
                <label className="heading-font text-[10px] font-bold uppercase tracking-widest text-white/60 mb-2 block">Scope of Certification</label>
                <textarea value={clientForm.scope} onChange={(e) => setClientForm({ ...clientForm, scope: e.target.value })} rows="4" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-eurogold-400/50 transition" placeholder="Describe the scope of certification..."></textarea>
              </div>
              <div className="flex gap-3 pt-2">
                <button type="button" onClick={closeClientForm} className="flex-1 px-5 py-3.5 rounded-xl border border-white/10 text-white/60 heading-font text-[11px] font-bold uppercase tracking-widest hover:bg-white/5 transition">Cancel</button>
                <button type="submit" className="flex-1 px-5 py-3.5 rounded-xl bg-eurogold-400 text-[#030a16] heading-font text-[11px] font-bold uppercase tracking-widest hover:bg-eurogold-300 transition shadow-xl">{editingClient ? 'Update Client' : 'Add Client'}</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ===== DELETE CLIENT MODAL ===== */}
      {deleteClientConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setDeleteClientConfirm(null)}></div>
          <div className="relative bg-[#0a1628] border border-white/10 rounded-3xl w-full max-w-sm p-8 text-center shadow-[0_0_80px_rgba(0,0,0,0.5)]">
            <div className="w-16 h-16 rounded-2xl bg-red-500/10 flex items-center justify-center mx-auto mb-5"><i className="fas fa-trash text-red-400 text-xl"></i></div>
            <h3 className="heading-font text-lg font-bold text-white mb-2">Delete Client?</h3>
            <p className="text-white/40 text-sm mb-6">This client will be removed from the website.</p>
            <div className="flex gap-3">
              <button onClick={() => setDeleteClientConfirm(null)} className="flex-1 px-5 py-3.5 rounded-xl border border-white/10 text-white/60 heading-font text-[11px] font-bold uppercase tracking-widest hover:bg-white/5 transition">Cancel</button>
              <button onClick={() => handleDeleteClient(deleteClientConfirm)} className="flex-1 px-5 py-3.5 rounded-xl bg-red-500 text-white heading-font text-[11px] font-bold uppercase tracking-widest hover:bg-red-600 transition">Delete</button>
            </div>
          </div>
        </div>
      )}

      {/* ===== POST FORM MODAL ===== */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-start justify-center p-4 overflow-y-auto">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={closeForm}></div>
          <div className="relative bg-[#0a1628] border border-white/10 rounded-3xl w-full max-w-2xl p-8 shadow-[0_0_80px_rgba(0,0,0,0.5)] my-10">
            <div className="flex items-center justify-between mb-8">
              <h3 className="heading-font text-lg font-bold text-white">
                {editingPost ? 'Edit Post' : 'Create New Post'}
              </h3>
              <button onClick={closeForm} className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-white/50 hover:bg-white/10 hover:text-white transition">
                <i className="fas fa-times text-sm"></i>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Basic Info */}
              <div className="px-4 py-3 rounded-xl bg-eurogold-400/5 border border-eurogold-400/10 mb-2">
                <p className="heading-font text-[10px] font-bold uppercase tracking-widest text-eurogold-400">Basic Information</p>
              </div>

              <div>
                <label className="heading-font text-[10px] font-bold uppercase tracking-widest text-white/60 mb-2 block">Post Title *</label>
                <input type="text" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} required className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-eurogold-400/50 transition" placeholder="e.g. SLCP Certification Guide" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="heading-font text-[10px] font-bold uppercase tracking-widest text-white/60 mb-2 block">Tag / Category *</label>
                  <input type="text" value={formData.tag} onChange={(e) => setFormData({ ...formData, tag: e.target.value })} required className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-eurogold-400/50 transition" placeholder="e.g. Social Audits" />
                </div>
                <div>
                  <label className="heading-font text-[10px] font-bold uppercase tracking-widest text-white/60 mb-2 block">Date *</label>
                  <input type="date" value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} required className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-eurogold-400/50 transition" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="heading-font text-[10px] font-bold uppercase tracking-widest text-white/60 mb-2 block">Link / URL Path</label>
                  <input type="text" value={formData.href} onChange={(e) => setFormData({ ...formData, href: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-eurogold-400/50 transition" placeholder="Auto-generated from title" />
                  <p className="text-white/25 text-[10px] mt-1">Leave empty to auto-generate from title</p>
                </div>
                <div>
                  <label className="heading-font text-[10px] font-bold uppercase tracking-widest text-white/60 mb-2 block">Cover Image</label>
                  <input type="text" value={formData.image} onChange={(e) => setFormData({ ...formData, image: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-eurogold-400/50 transition" placeholder="/r1.png or https://..." />
                </div>
              </div>

              {formData.image && (
                <div className="flex items-center gap-3">
                  <div className="w-24 h-16 rounded-xl overflow-hidden border border-white/10">
                    <img src={formData.image} alt="Preview" className="w-full h-full object-cover" />
                  </div>
                  <span className="text-white/30 text-xs">Cover preview</span>
                </div>
              )}

              {/* Content Section */}
              <div className="px-4 py-3 rounded-xl bg-blue-500/5 border border-blue-500/10 mt-6 mb-2">
                <p className="heading-font text-[10px] font-bold uppercase tracking-widest text-blue-400">Post Content (Optional — for full article pages)</p>
              </div>

              <div>
                <label className="heading-font text-[10px] font-bold uppercase tracking-widest text-white/60 mb-2 block">Short Excerpt</label>
                <input type="text" value={formData.excerpt} onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-eurogold-400/50 transition" placeholder="A brief summary shown below the title" />
              </div>

              <div>
                <label className="heading-font text-[10px] font-bold uppercase tracking-widest text-white/60 mb-2 block">
                  Full Article Body
                </label>
                <textarea
                  value={formData.body}
                  onChange={(e) => setFormData({ ...formData, body: e.target.value })}
                  rows="10"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-eurogold-400/50 transition font-mono"
                  placeholder={"Write your article content here...\n\nUse ## for headings\nUse ### for sub-headings\nUse - for bullet points\n\nSeparate paragraphs with blank lines"}
                ></textarea>
                <p className="text-white/25 text-[10px] mt-1">Supports: ## Heading, ### Sub-heading, - bullet points, blank lines for paragraphs</p>
              </div>

              <div>
                <label className="heading-font text-[10px] font-bold uppercase tracking-widest text-white/60 mb-2 block">Gallery Images</label>
                <input type="text" value={formData.gallery} onChange={(e) => setFormData({ ...formData, gallery: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-eurogold-400/50 transition" placeholder="/img1.png, /img2.png, /img3.png" />
                <p className="text-white/25 text-[10px] mt-1">Comma-separated image URLs for gallery section</p>
              </div>

              <div className="flex gap-3 pt-4">
                <button type="button" onClick={closeForm} className="flex-1 px-5 py-3.5 rounded-xl border border-white/10 text-white/60 heading-font text-[11px] font-bold uppercase tracking-widest hover:bg-white/5 transition">
                  Cancel
                </button>
                <button type="submit" disabled={loading} className="flex-1 px-5 py-3.5 rounded-xl bg-eurogold-400 text-[#030a16] heading-font text-[11px] font-bold uppercase tracking-widest hover:bg-eurogold-300 transition shadow-xl disabled:opacity-50">
                  {loading ? <><i className="fas fa-spinner fa-spin mr-2"></i>Saving...</> : editingPost ? 'Update Post' : 'Publish Post'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ===== CONTACT VIEW MODAL ===== */}
      {viewingContact && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setViewingContact(null)}></div>
          <div className="relative bg-[#0a1628] border border-white/10 rounded-3xl w-full max-w-lg p-8 shadow-[0_0_80px_rgba(0,0,0,0.5)]">
            <div className="flex items-center justify-between mb-6">
              <h3 className="heading-font text-lg font-bold text-white">Contact Details</h3>
              <button onClick={() => setViewingContact(null)} className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-white/50 hover:bg-white/10 hover:text-white transition">
                <i className="fas fa-times text-sm"></i>
              </button>
            </div>

            <div className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="heading-font text-[10px] font-bold uppercase tracking-widest text-white/40 mb-1">Name</p>
                  <p className="text-white font-medium">{viewingContact.name}</p>
                </div>
                <div>
                  <p className="heading-font text-[10px] font-bold uppercase tracking-widest text-white/40 mb-1">Date</p>
                  <p className="text-white/70 text-sm">{formatDateTime(viewingContact.submittedAt)}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="heading-font text-[10px] font-bold uppercase tracking-widest text-white/40 mb-1">Email</p>
                  <a href={`mailto:${viewingContact.email}`} className="text-eurogold-400 text-sm hover:underline">{viewingContact.email}</a>
                </div>
                <div>
                  <p className="heading-font text-[10px] font-bold uppercase tracking-widest text-white/40 mb-1">Phone</p>
                  {viewingContact.phone ? (
                    <a href={`tel:${viewingContact.phone}`} className="text-eurogold-400 text-sm hover:underline">{viewingContact.phone}</a>
                  ) : (
                    <p className="text-white/30 text-sm">Not provided</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="heading-font text-[10px] font-bold uppercase tracking-widest text-white/40 mb-1">Service Requested</p>
                  <span className="inline-flex px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold heading-font">
                    {viewingContact.service}
                  </span>
                </div>
                <div>
                  <p className="heading-font text-[10px] font-bold uppercase tracking-widest text-white/40 mb-1">Source</p>
                  <span className="inline-flex px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-bold heading-font">
                    {viewingContact.source || 'Website'}
                  </span>
                </div>
              </div>

              <div>
                <p className="heading-font text-[10px] font-bold uppercase tracking-widest text-white/40 mb-2">Message</p>
                <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                  <p className="text-white/80 text-sm leading-relaxed whitespace-pre-wrap">{viewingContact.message}</p>
                </div>
              </div>

              {viewingContact.attachmentUrl && (
                <div>
                  <p className="heading-font text-[10px] font-bold uppercase tracking-widest text-white/40 mb-2">Attachment</p>
                  <a
                    href={viewingContact.attachmentUrl}
                    download={viewingContact.attachmentName || 'attachment'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-eurogold-400/30 transition group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-eurogold-400/10 flex items-center justify-center shrink-0">
                      <i className="fas fa-paperclip text-eurogold-400"></i>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white text-sm font-medium truncate">{viewingContact.attachmentName || 'Uploaded File'}</p>
                      <p className="text-white/30 text-xs">Click to view / download</p>
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-eurogold-400/10 flex items-center justify-center group-hover:bg-eurogold-400/20 transition">
                      <i className="fas fa-download text-eurogold-400 text-xs"></i>
                    </div>
                  </a>
                </div>
              )}

              <div className="flex gap-3 pt-4">
                <a
                  href={`mailto:${viewingContact.email}?subject=Re: ${viewingContact.service} Inquiry&body=Dear ${viewingContact.name},%0D%0A%0D%0AThank you for contacting Eurocert Asia.%0D%0A%0D%0A`}
                  className="flex-1 px-5 py-3.5 rounded-xl bg-eurogold-400 text-[#030a16] heading-font text-[11px] font-bold uppercase tracking-widest hover:bg-eurogold-300 transition shadow-xl text-center"
                >
                  <i className="fas fa-reply mr-2"></i>Reply via Email
                </a>
                <button
                  onClick={() => { setDeleteContactConfirm(viewingContact.id); }}
                  className="px-5 py-3.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 heading-font text-[11px] font-bold uppercase tracking-widest hover:bg-red-500/20 transition"
                >
                  <i className="fas fa-trash"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ===== DELETE POST MODAL ===== */}
      {deleteConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setDeleteConfirm(null)}></div>
          <div className="relative bg-[#0a1628] border border-white/10 rounded-3xl w-full max-w-sm p-8 text-center shadow-[0_0_80px_rgba(0,0,0,0.5)]">
            <div className="w-16 h-16 rounded-2xl bg-red-500/10 flex items-center justify-center mx-auto mb-5">
              <i className="fas fa-trash text-red-400 text-xl"></i>
            </div>
            <h3 className="heading-font text-lg font-bold text-white mb-2">Delete Post?</h3>
            <p className="text-white/40 text-sm mb-6">This will remove the post from the website immediately.</p>
            <div className="flex gap-3">
              <button onClick={() => setDeleteConfirm(null)} className="flex-1 px-5 py-3.5 rounded-xl border border-white/10 text-white/60 heading-font text-[11px] font-bold uppercase tracking-widest hover:bg-white/5 transition">Cancel</button>
              <button onClick={() => handleDeletePost(deleteConfirm)} className="flex-1 px-5 py-3.5 rounded-xl bg-red-500 text-white heading-font text-[11px] font-bold uppercase tracking-widest hover:bg-red-600 transition">Delete</button>
            </div>
          </div>
        </div>
      )}

      {/* ===== DELETE CONTACT MODAL ===== */}
      {deleteContactConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setDeleteContactConfirm(null)}></div>
          <div className="relative bg-[#0a1628] border border-white/10 rounded-3xl w-full max-w-sm p-8 text-center shadow-[0_0_80px_rgba(0,0,0,0.5)]">
            <div className="w-16 h-16 rounded-2xl bg-red-500/10 flex items-center justify-center mx-auto mb-5">
              <i className="fas fa-trash text-red-400 text-xl"></i>
            </div>
            <h3 className="heading-font text-lg font-bold text-white mb-2">Delete Contact?</h3>
            <p className="text-white/40 text-sm mb-6">This message will be permanently removed.</p>
            <div className="flex gap-3">
              <button onClick={() => setDeleteContactConfirm(null)} className="flex-1 px-5 py-3.5 rounded-xl border border-white/10 text-white/60 heading-font text-[11px] font-bold uppercase tracking-widest hover:bg-white/5 transition">Cancel</button>
              <button onClick={() => handleDeleteContact(deleteContactConfirm)} className="flex-1 px-5 py-3.5 rounded-xl bg-red-500 text-white heading-font text-[11px] font-bold uppercase tracking-widest hover:bg-red-600 transition">Delete</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
