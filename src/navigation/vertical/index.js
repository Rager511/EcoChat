// ** Icon imports
import Account from 'mdi-material-ui/Account';
import Cash from 'mdi-material-ui/Cash';
import ClipboardText from 'mdi-material-ui/ClipboardText';
import ClipboardListIcon from 'mdi-material-ui/ClipboardList';
import HomeOutline from 'mdi-material-ui/HomeOutline'
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'
import AccountTie from 'mdi-material-ui/AccountTie';
import Robot from 'mdi-material-ui/Robot'; 


const navigation = () => {
  return [
    {
      title: 'Dashboard',
      icon: HomeOutline,
      path: '/dashboard'
    },
    {
      title: 'Account Settings',
      icon: AccountCogOutline,
      path: '/account-settings'
    },
    {
      title: 'Users',
      icon: Account,
      path: '/users',
      openInNewTab: false
    },
    {
      title: 'ChatBot Assistant',
      icon: Robot,
      path: '/chatbot',
      openInNewTab: false
    },
    {
      sectionTitle: 'Pages'
    },
    {
      title: 'Revenue',
      icon: Cash,
      path: '/revenue',
      openInNewTab: false
    },
    {
      title: 'Questionnaire',
      icon: ClipboardListIcon,
      path: '/questionnaire',
      openInNewTab: false
    },
    {
      title: 'Reports',
      path: '/reports',
      icon: ClipboardText
    },
    {
      title: 'Experts',
      path: '/experts',
      icon: AccountTie
    },
  ]
}

export default navigation
