"""Add one-many roles and permission

Revision ID: 920f3f14ff53
Revises: 35bae01be210
Create Date: 2020-09-27 09:53:47.326248

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = "920f3f14ff53"
down_revision = "35bae01be210"
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table(
        "permissions",
        sa.Column("id", sa.Integer(), nullable=False),
        sa.Column("name", sa.String(), nullable=False),
        sa.PrimaryKeyConstraint("id"),
    )
    op.create_table(
        "roles",
        sa.Column("id", sa.Integer(), nullable=False),
        sa.Column("name", sa.String(), nullable=False),
        sa.Column("permission_id", sa.Integer(), nullable=False),
        sa.Column("description", sa.String(), nullable=True),
        sa.Column("updated_at", sa.DateTime(), nullable=False),
        sa.ForeignKeyConstraint(["permission_id"], ["permissions.id"],),
        sa.PrimaryKeyConstraint("id"),
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table("roles")
    op.drop_table("permissions")
    # ### end Alembic commands ###
