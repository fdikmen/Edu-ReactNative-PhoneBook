import { ActivityIndicator, Alert, FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import UserItem from './UserItem'
import API from '../config/API'

type Props = {}
type UserType = {
    id: number,
    name: string,
    phone: string,
    createdAt: string,
    avatar: string,
    isActive: boolean
}

const User = (props: Props) => {
    const [users, setUsers] = useState<UserType[]>([])
    const [loading, setLoading] = useState(false)
    const [filterText, setFilterText] = useState('')

    const filteredUsers = users.filter((user) => {
return user.name.toLocaleLowerCase().includes(filterText.toLocaleLowerCase())
||
user.phone.toLocaleLowerCase().includes(filterText.toLocaleLowerCase())
    })
    //ComponentDidMount
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            API.get('/users')
                .then((res) => { setUsers(res.data) })
                .catch((err) => { console.log(err) })
                .finally(() => { setLoading(false) })
        }, 3000);
    }, [])

    const EmptyComp = loading
        ? <ActivityIndicator size='large' color='gray' />
        : <View style={styles.emptyContainer}>
            <Text>Empty Data!</Text>
        </View>

    const FooterComp = <View style={styles.footerContainer}>
        <Text style={styles.footerText}>
            Total Users: {users.length}
        </Text>
    </View>

    const HeaderComp = <View>
        <TextInput
            value={filterText}
            onChangeText={(text) => setFilterText(text)}
            placeholder='Search...'
            style={styles.searchInput}
        />
    </View>

    return (
        <View>
            <FlatList
                data={filteredUsers}
                renderItem={({ item }) => <UserItem user={item} />}
                keyExtractor={(item) => item.id.toString()}
                ListEmptyComponent={EmptyComp}
                ListFooterComponent={FooterComp}
                ListHeaderComponent={HeaderComp}
                onEndReached={() => Alert.alert('End Reached!')}
            />
        </View>
    )
}

export default User

const styles = StyleSheet.create({
    emptyContainer: {
        padding:10,
        alignItems:'center',
        justifyContent:'center'
    },
    footerContainer: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor:'#eee',
        padding: 10
    },
    footerText: {
        fontSize: 16,
        fontStyle: 'italic',
    },
    searchInput: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        padding:10,
        fontSize:16,
        marginHorizontal:10,
        marginVertical:5
    }
    })