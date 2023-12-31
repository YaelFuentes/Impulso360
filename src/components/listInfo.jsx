import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import LanguageIcon from '@mui/icons-material/Language';
import Chile from '../img/icon/chile.png'
import Argentina from '../img/icon/argentina.png'
import PublicIcon from '@mui/icons-material/Public';
import Image from 'next/image';

export default function FolderList() {
  return (
    <div className='md:grid-cols-2 gap-2 lg:p-4 lg:ml-10'>
      <div>
        <List sx={{ width: '100%', maxWidth: 360, color: 'white' }}>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <Image src={Chile} />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Agencia Chile" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <PhoneIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="+56 9 9589 9154" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <MailIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="contacto@agenciaimpulso360.com" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <LanguageIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="agenciaimpulso360.cl" />
          </ListItem>
        </List>
      </div>
      <hr/>
      <div>
        <List sx={{ width: '100%', maxWidth: 360, color: 'white' }}>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <Image src={Argentina}/>
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Agencia Argentina" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <PhoneIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="+54 9 261 2057867" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <MailIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="contacto@agenciaimpulso360.com" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <LanguageIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="agenciaimpulso360.com" />
          </ListItem>
        </List>
      </div>
    </div>
  );
}