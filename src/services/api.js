export const mockMessages = [
  {
      incoming: true,
      message: 'Hi Vladimir',
  },
  {
      incoming: false,
      message: 'Hi, John',
  },
  {
      incoming: true,
      message: 'When we will learn real data fetching?'
  },
  {
      incoming: false,
      message: `Let's get the basic first. We need to understand styling and handling inputs right? After all you want not only to receive but send messages too right?`,
  }
]

export const chats = [{
  id: "123",
  title: "John",
  description: "Hey there",
  avatar: "https://www.codetic.net/demo/templates/Privado/img/avatar.png",
  messages: mockMessages
},{
  id: "123",
  title: "John",
  description: "Hey there",
  avatar: "https://www.codetic.net/demo/templates/Privado/img/avatar.png",
  messages: mockMessages
},{
  id: "123",
  title: "John",
  description: "Hey there",
  avatar: "https://www.codetic.net/demo/templates/Privado/img/avatar.png",
  messages: mockMessages
},{
  id: "123",
  title: "John",
  description: "Hey there",
  avatar: "https://www.codetic.net/demo/templates/Privado/img/avatar.png",
  messages: mockMessages
},{
  id: "123",
  title: "John",
  description: "Hey there",
  avatar: "https://www.codetic.net/demo/templates/Privado/img/avatar.png",
  messages: mockMessages
},{
  id: "123",
  title: "John",
  description: "Hey there",
  avatar: "https://www.codetic.net/demo/templates/Privado/img/avatar.png",
  messages: mockMessages
},{
  id: "123",
  title: "John",
  description: "Hey there",
  avatar: "https://www.codetic.net/demo/templates/Privado/img/avatar.png",
  messages: mockMessages
},{
  id: "123",
  title: "John",
  description: "Hey there",
  avatar: "https://www.codetic.net/demo/templates/Privado/img/avatar.png",
  messages: mockMessages
}]

export const getChats = () => (
  new Promise(resolve => setTimeout(() => resolve(chats), 1000))
)

export const getMessagesById = (id) => (
  new Promise(resolve => setTimeout(() => resolve(mockMessages), 1000))
)

export const postMessage = (message) => mockMessages.push({
  incoming: false,
  message
});