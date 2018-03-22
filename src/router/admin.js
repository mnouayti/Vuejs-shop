import Index from '@/components/pages/admin/Index'
import New from '@/components/pages/admin/New'
import Products from '@/components/pages/admin/Products'
import Edit from '@/components/pages/admin/Edit'

export default {
  path: '/admin',
  component: Index,
  children: [
    {
      path: 'new',
      name: 'New',
      component: New
    },
    {
      path: '',
      name: 'Products',
      component: Products
    },
    {
      path: 'edit/:id',
      name: 'Edit',
      component: Edit
    }
  ]
}
