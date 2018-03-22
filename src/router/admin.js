import Index from '@/components/pages/Admin/Index'
import New from '@/components/pages/Admin/New'
import Products from '@/components/pages/Admin/Products'
import Edit from '@/components/pages/Admin/Edit'

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
