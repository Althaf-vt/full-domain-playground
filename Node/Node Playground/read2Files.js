const fs = require('fs').promises;


async function read(file1,file2) {
    try {
        const [data1,data2] = await Promise.all(
        [fs.readFile(file1,'utf-8'), fs.readFile(file2,'utf-8')]
    )

        await fs.writeFile('destination.txt',`${data1}\n${data2}`);

        console.log('done')
    } catch (error) {
        console.log(error)
    }
}

read('file1.txt','file2.txt');

