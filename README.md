# MacB
             { 
                  list.map((l, i) => ( 
                 <ListItem key={i} bottomDivider>
                    <ListItem.Content>
                        <ListItem.Title>{l.name}</ListItem.Title>
                        <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem> 
                 ))
              } 
