import { MigrationInterface, QueryRunner } from "typeorm";

export class default1667663261676 implements MigrationInterface {
    name = 'default1667663261676'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`users\` (\`userId\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`nickname\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`age\` int NULL, \`experience\` int NULL, \`levelId\` int NULL, UNIQUE INDEX \`IDX_ad02a1be8707004cb805a4b502\` (\`nickname\`), UNIQUE INDEX \`IDX_97672ac88f789774dd47f7c8be\` (\`email\`), PRIMARY KEY (\`userId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`levels\` (\`levelId\` int NOT NULL, \`totalPoints\` int NOT NULL, PRIMARY KEY (\`levelId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`songs\` (\`songId\` int NOT NULL AUTO_INCREMENT, \`videoLink\` varchar(255) NOT NULL, \`songContentLink\` varchar(255) NOT NULL, \`musicTypeId\` int NULL, \`levelId\` int NULL, UNIQUE INDEX \`IDX_b742f24889a52bc39549ab3f04\` (\`videoLink\`), UNIQUE INDEX \`IDX_0eb645d6bdb47809a42ec14ad1\` (\`songContentLink\`), PRIMARY KEY (\`songId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`genres\` (\`musicTypeId\` int NOT NULL AUTO_INCREMENT, \`userMusicType\` varchar(255) NOT NULL, UNIQUE INDEX \`IDX_d428d214e02e01b487cc88de85\` (\`userMusicType\`), PRIMARY KEY (\`musicTypeId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`profiles\` (\`userId\` int NOT NULL, \`musicTypeId\` int NOT NULL, INDEX \`IDX_315ecd98bd1a42dcf2ec4e2e98\` (\`userId\`), INDEX \`IDX_ac6ad1b3e5152627c96e8d719a\` (\`musicTypeId\`), PRIMARY KEY (\`userId\`, \`musicTypeId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`users\` ADD CONSTRAINT \`FK_2735b8ee71c0fa7f68190fe61b5\` FOREIGN KEY (\`levelId\`) REFERENCES \`levels\`(\`levelId\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`songs\` ADD CONSTRAINT \`FK_b322a5b470940c6f2841f574969\` FOREIGN KEY (\`musicTypeId\`) REFERENCES \`genres\`(\`musicTypeId\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`songs\` ADD CONSTRAINT \`FK_2292bc7a8720d22f5c5918b8a12\` FOREIGN KEY (\`levelId\`) REFERENCES \`levels\`(\`levelId\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`profiles\` ADD CONSTRAINT \`FK_315ecd98bd1a42dcf2ec4e2e985\` FOREIGN KEY (\`userId\`) REFERENCES \`users\`(\`userId\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`profiles\` ADD CONSTRAINT \`FK_ac6ad1b3e5152627c96e8d719a0\` FOREIGN KEY (\`musicTypeId\`) REFERENCES \`genres\`(\`musicTypeId\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`profiles\` DROP FOREIGN KEY \`FK_ac6ad1b3e5152627c96e8d719a0\``);
        await queryRunner.query(`ALTER TABLE \`profiles\` DROP FOREIGN KEY \`FK_315ecd98bd1a42dcf2ec4e2e985\``);
        await queryRunner.query(`ALTER TABLE \`songs\` DROP FOREIGN KEY \`FK_2292bc7a8720d22f5c5918b8a12\``);
        await queryRunner.query(`ALTER TABLE \`songs\` DROP FOREIGN KEY \`FK_b322a5b470940c6f2841f574969\``);
        await queryRunner.query(`ALTER TABLE \`users\` DROP FOREIGN KEY \`FK_2735b8ee71c0fa7f68190fe61b5\``);
        await queryRunner.query(`DROP INDEX \`IDX_ac6ad1b3e5152627c96e8d719a\` ON \`profiles\``);
        await queryRunner.query(`DROP INDEX \`IDX_315ecd98bd1a42dcf2ec4e2e98\` ON \`profiles\``);
        await queryRunner.query(`DROP TABLE \`profiles\``);
        await queryRunner.query(`DROP INDEX \`IDX_d428d214e02e01b487cc88de85\` ON \`genres\``);
        await queryRunner.query(`DROP TABLE \`genres\``);
        await queryRunner.query(`DROP INDEX \`IDX_0eb645d6bdb47809a42ec14ad1\` ON \`songs\``);
        await queryRunner.query(`DROP INDEX \`IDX_b742f24889a52bc39549ab3f04\` ON \`songs\``);
        await queryRunner.query(`DROP TABLE \`songs\``);
        await queryRunner.query(`DROP TABLE \`levels\``);
        await queryRunner.query(`DROP INDEX \`IDX_97672ac88f789774dd47f7c8be\` ON \`users\``);
        await queryRunner.query(`DROP INDEX \`IDX_ad02a1be8707004cb805a4b502\` ON \`users\``);
        await queryRunner.query(`DROP TABLE \`users\``);
    }

}
